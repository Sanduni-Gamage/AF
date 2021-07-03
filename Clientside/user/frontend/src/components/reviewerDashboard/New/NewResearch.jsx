import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../../config/config";
import { getUserToken } from "../../../auth/userAuth";
const NewResearch = () => {
  const [pendingPublications, setpendingPublications] = useState([]);
  const handleId = (id) => {
    setId(id);
    console.log(id);
  };
  useEffect(() => {
    fetch(`${BASE_URL}/publication/pending`, {
      method: "GET",
      headers: {
        authToken: getUserToken(),
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setpendingPublications(data.pendingPublications);
      });
  }, []);
  return (
    <div>
      <h2> Research Papers to be Reviewed</h2>
      <hr></hr>
      <div>
        <table id="customers">
          <tr>
            <th><h2>Uploaded Date</h2></th>
            <th><h2>Research Topic</h2></th>
            <th><h2>Review Paper</h2></th>
          </tr>
          {pendingPublications &&
            pendingPublications.map((paper) => (
              <tr key={paper._id}>
                <td><h2>{" "}
                  {
                  new Date(paper.createdAt).toDateString() +
                    " " +
                    new Date(paper.createdAt).toLocaleTimeString()
                    }
                    </h2>
                    </td>
                <td><h2>{paper.topic}</h2></td>
                <td>
                  <div>
                    <Link
                      className="cardbtn"
                      to={`/auth/user/reviewer/research/card/${paper._id}`}
                    >
                     <h2>Review Paper</h2>
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
export default NewResearch;