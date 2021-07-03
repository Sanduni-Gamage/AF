import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../../config/config";

const ResearchApproval = () => {
  const [approvePaper, setApprovedPaper] = useState([]);
  const handleId = (id) => {
    setId(id);
    console.log(id);
  };
  useEffect(() => {
    fetch(`${BASE_URL}/publication/approved`, {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setApprovedPaper(data.approvedPublications);
      });
  }, []);

  return (
    <div>
      <h2>Approved Research Papers</h2>
      <table id="customers">
        <tr>
          <th><h2>Date</h2></th>
          <th><h2>Topic</h2></th>
        </tr>
        {approvePaper &&
          approvePaper.map((approvedpaper) => (
            <tr key={approvedpaper._id}>
              <td>
                <h2>
                {new Date(approvedpaper.createdAt).toDateString() +
                  " " +
                  new Date(approvedpaper.createdAt).toLocaleTimeString()}
                  </h2>
              </td>
              <td><h2>{approvedpaper.topic}</h2></td>
            </tr>
          ))}
      </table>
    </div>
  );
};

export default ResearchApproval;