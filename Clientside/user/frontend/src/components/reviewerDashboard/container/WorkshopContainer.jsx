import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../../config/config";
import { getUserToken } from "../../../auth/userAuth";

const ResearchPaperApproval = () => {
  const { id } = useParams();
  let [card, setCard] = useState([]);
  const [btnClick, setbtnClick] = useState(false);

  useEffect(async () => {
    const resCard = await fetch(`${BASE_URL}/workshop/pending/${id}`, {
      method: "GET",
      headers: {
        authToken: getUserToken(),
      },
    });

    const data = await resCard.json();
    setCard(data.workshopcard);
    setbtnClick(true);
  }, []);
  console.log(card);
  const Approvehandle = async (id) => {
    const res = await fetch(`${BASE_URL}/workshop/approve/${id}`, {
      method: "PATCH",
      headers: {
        authToken: getUserToken(),
      },
    });

    if (res.ok) {
      toast.success("Workshop Proposal was Successfully Approved");
      setbtnClick(id);
    }
  };

  const Rejecthandle = async (id) => {
    const res = await fetch(`${BASE_URL}/workshop/reject/${id}`, {
      method: "PATCH",
      headers: {
        authToken: getUserToken(),
      },
    });
    if (res.ok) {
      toast.success("Workshop Proposal Successfully Rejected");
      setbtnClick(id);
    }
  };
  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <h2>Submited WorkShop</h2>
      <hr></hr>
      <div className="reviewer-research-card-container">
        <div className="reviewer-research-card">
         
          <header>
            <hr></hr>
            <h2>{card.topic}</h2>
          </header>

          <div>
            <tr>
              <td>
                <div>
                  <Link
                    to={{
                      pathname: card.src,
                    }}
                    target="blank"
                  >
                    <div className="cardbtn"><h2>Download</h2></div>
                  </Link>
                </div>
              </td>
              </tr>
              <tr>
              <td>
                <button
                  className="cardbtn1"
                  onClick={() => Approvehandle(card._id)}
                ><h2>
                  Approve
                  </h2>
                </button>
              </td>
              </tr>
              <tr>
              <td>
                <button
                  className="cardbtn2"
                  onClick={() => Rejecthandle(card._id)}
                >
                  <h2>
                  Reject
                  </h2>
                </button>
              </td>
            </tr>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchPaperApproval;