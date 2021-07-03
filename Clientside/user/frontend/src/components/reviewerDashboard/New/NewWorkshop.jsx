import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../../config/config";
import { getUserToken } from "../../../auth/userAuth";

const NewWorkshop = () => {
  const [pendingWorkshop, setpendingWorkshop] = useState([]);
  const handleId = (id) => {
    setId(id);
    console.log(id);
  };
  useEffect(() => {
    fetch(`${BASE_URL}/workshop/pending`, {
      method: "GET",
      headers: {
        authToken: getUserToken(),
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setpendingWorkshop(data.pendingWorkshops);
      });
  }, []);
  return (
    <div>
      <h2>  Workshops Proposals To be Reviewed </h2>
      <hr></hr>
      <div>
        <table id="customers">
          <tr>
            <th><h2>Date</h2></th>
            <th><h2>Topic</h2></th>
            <th><h2>Action</h2></th>
          </tr>
          {pendingWorkshop &&
            pendingWorkshop.map((workshop) => (
              <tr key={workshop._id}>
                 <td>
                   <h2>
                  {" "}

                  {
                  new Date(workshop.dueDate).toDateString() +
                    "   " +
                    new Date(workshop.dueDate).toLocaleTimeString()
                    }
                    </h2>
                </td>
                <td><h2>{workshop.topic}</h2></td>
                <td>
                  <div>
                    <Link
                      className="cardbtn"
                      to={`/auth/user/reviewer/workshop/card/${workshop._id}`}
                    >
                      <h2>view Card</h2>
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
        </table>
      </div>
      
    </div>
  );
};

export default NewWorkshop;