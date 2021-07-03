import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../../config/config";
import { getUserToken } from "../../../auth/userAuth";

const ResearchDecline = () => {
  const [deletedpaper, setRejectedPublications] = useState([]);

  const handleId = (id) => {
    setId(id);
    console.log(id);
  };

  useEffect(() => {
    fetch(`${BASE_URL}/publication/rejected`, {
      method: "GET",
      headers: {
        authToken: getUserToken(),
      },
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log(data.rejectedPublications);
        setRejectedPublications(data.rejectedPublications);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>Rejected Research Papers</h2>
      <table id="customers">
        <tbody>
          <tr>
            <th><h2> Uploaded Date </h2></th>
            <th><h2> Topic OF Reserch Paper</h2> </th>
            
          </tr>

          
            {deletedpaper.map((deletedpaper) => (
              <tr key={deletedpaper._id}>
                <td>
                  <h2>
                {
                new Date(deletedpaper.createdAt).toDateString() +
                  "   "   +
                  new Date(deletedpaper.createdAt).toLocaleTimeString()
                  }
                  </h2>
              </td>
                <td><h2>{deletedpaper.topic}</h2></td>
              </tr>
            ))}
          
        </tbody>
      </table>
    </div>
  );
};

export default ResearchDecline;