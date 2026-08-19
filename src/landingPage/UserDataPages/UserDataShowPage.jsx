import React, { useState, useEffect } from "react";
import { handelError, handelSuccess } from "../../util";
import "../../../src/styles/UserDataShowPage.css";
import { useNavigate } from "react-router-dom";

function UserDataShowPage() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Put useNavigate here
  const navigate = useNavigate();

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const url = "https://apna-mess-backend.onrender.com/api/v1/userdata";

      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();

        setUserData(data);

        if (data.length === 0) {
          handelError("No data found");
        }
      } else {
        handelError("Failed to fetch data");
      }
    } catch (error) {
      handelError(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (userData.length === 0) {
    return <h1>No User Data Available</h1>;
  }

  return (
    <div className="userDataContainer">
      <h1>User Data</h1>

      <table className="userDataTable">
        <thead>
          <tr className="table-row-head">
            <th>Name</th>
            <th>User Num</th>
          </tr>
        </thead>

        <tbody>
          {userData.map((item) => (
            <tr
              key={item._id}
              className="user-row"
              onClick={() => {
                console.log("Clicked ID:", item._id);
                navigate(`/usersdata/${item._id}`);
              }}
              style={{ cursor: "pointer" }}
            >
              <td className="table-data1">{item.name}</td>
              <td>{item.userNum}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserDataShowPage;