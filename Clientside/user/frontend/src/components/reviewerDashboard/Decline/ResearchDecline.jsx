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
      <h3>Diclined Research Papers</h3>
      <table id="customers">
        <tbody>
          <tr>
            <th> Date </th>
            <th> Topic OF Reserch Paper </th>
          </tr>

          <tr>
            {deletedpaper.map((deletedpaper) => (
              <tr key={deletedpaper._id}>
                <td>
                {
                new Date(deletedpaper.createdAt).toDateString() +
                  "   "   +
                  new Date(deletedpaper.createdAt).toLocaleTimeString()
                  }
              </td>
                <td>{deletedpaper.topic}</td>
              </tr>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ResearchDecline;