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
      <h3> Pending Workshops </h3>
      <hr></hr>
      <div>
        <table id="customers">
          <tr>
            <th>Date</th>
            <th>Topic</th>
            <th>Action</th>
          </tr>
          {pendingWorkshop &&
            pendingWorkshop.map((workshop) => (
              <tr key={workshop._id}>
                 <td>
                  {" "}

                  {
                  new Date(workshop.dueDate).toDateString() +
                    "   " +
                    new Date(workshop.dueDate).toLocaleTimeString()
                    }
                </td>
                <td>{workshop.topic}</td>
                <td>
                  <div>
                    <Link
                      className="cardbtn"
                      to={`/auth/user/reviewer/workshop/card/${workshop._id}`}
                    >
                      view Card
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
        </table>
      </div>
      <hr></hr>
    </div>
  );
};

export default NewWorkshop;