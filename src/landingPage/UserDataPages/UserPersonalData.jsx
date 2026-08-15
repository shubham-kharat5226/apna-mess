import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { handelError } from "../../util";
import "../../../src/styles/UserPersonalData.css";

function UserPersonalData() {
  const { id } = useParams();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUserDetails();
  }, [id]);

  const fetchUserDetails = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/v1/userdata/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        const userData = data?.data || data;

        console.log("User data:", userData);
        setUser(userData);
      } else {
        const errorData = await response.json().catch(() => ({}));
        handelError(errorData.message || "User data not found");
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

  if (!user) {
    return <h1>User not found</h1>;
  }

  // const address = [ user.district, user.subdistrict, user.city]
  //   .filter(Boolean)
  //   .join(", ");

  return (
    
    


    <div className="user-details-container">
        
      <div className="user-card">
        <h2>{user.name}</h2>
        <p>
          <strong>Name:</strong> {user.name}
        </p>

        <p>
          <strong>Mobile Number:</strong> {user.number}
        </p>

        <p>
          <strong>User Number:</strong> {user.userNum}
        </p>

        <p>
          <strong>Payment:</strong> {user.payment}
        </p>

        <p>
          <strong>Data Month:</strong> {user.datemonth}
        </p>

        <div className="address">
          <p>
            <strong>District: </strong> {user.district}
          </p>

          <p>
            <strong>SubDistrict: </strong> {user.subdistrict}
          </p>
          
        </div>
        <p>
            <strong>City: </strong> {user.city}
          </p>
      </div>
    </div>
  );
}

export default UserPersonalData;