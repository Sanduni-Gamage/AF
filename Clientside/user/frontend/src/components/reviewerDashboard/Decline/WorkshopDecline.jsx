import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../../config/config";
import { getUserToken } from "../../../auth/userAuth";

const WorkshopDecline = () => {
  const [rejectedWorkshop, setRejectedWorkshop] = useState([]);
  const handleId = (id) => {
    setId(id);
    console.log(id);
  };
  useEffect(() => {
    fetch(`${BASE_URL}/workshop/rejected`, {
      method: "GET",
      headers: {
        authToken: getUserToken(),
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setRejectedWorkshop(data.rejectedWorkshops);
      });
  }, []);
  return (
    <div>
      <h2>Rejected Workshop Proposals</h2>

      <table id="customers">
        <tbody>
          <tr>
            <th><h2>Uploaded Date</h2></th>
            <th><h2>Topic OF Workshop Proposal</h2></th>
          </tr>
          {rejectedWorkshop &&
            rejectedWorkshop.map((deletedworkshop) => (
              <tr key={deletedworkshop._id}>
                <td>
                  <h2>

                  {"   "}

                  {
                  new Date(deletedworkshop.createdAt).toDateString() +
                    "   " +
                    new Date(deletedworkshop.createdAt).toLocaleTimeString()
                    }
                    </h2>
                </td>
                <td><h2>{deletedworkshop.topic}</h2></td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default WorkshopDecline;