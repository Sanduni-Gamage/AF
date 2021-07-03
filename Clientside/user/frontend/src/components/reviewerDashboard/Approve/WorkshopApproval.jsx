import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../../config/config";

const WorkshopApproval = () => {
  const [pendingWorkshops, setPendingWorkshops] = useState([]);
  const handleId = (id) => {
    setId(id);
    console.log(id);
  };
  useEffect(() => {
    fetch(`${BASE_URL}/workshop/approved`, {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPendingWorkshops(data.approvedWorkshops);
      });
  }, []);
  return (
    <div>
      <h2>Approved Workshop Proposals</h2>
      <table id="customers">
        <tbody>
          <tr>
            <th><h2>Due Date</h2></th>
            <th><h2>Topic</h2></th>
          </tr>
          {pendingWorkshops &&
            pendingWorkshops.map((approvedworkshop) => (
              <tr key={approvedworkshop._id}>
                <td>
                  <h2>
                  {new Date(approvedworkshop.dueDate).toDateString() +
                    " " +
                    new Date(approvedworkshop.dueDate).toLocaleTimeString()}
                    </h2>
                </td>
                <td><h2>{approvedworkshop.topic}</h2></td>
              </tr>
            ))}
        </tbody>
      </table>
      
    </div>
  );
};

export default WorkshopApproval;