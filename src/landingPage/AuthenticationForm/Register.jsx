import React, { useState } from "react";
import { handelError, handelSuccess } from "../../util";
import { useNavigate } from "react-router-dom";

function Register() {
  const [signupInfo, setSignupInfo] = useState({
    name: "",
    username: "",
    password: "",
  });

  const navigate = useNavigate();
  const handelChenge = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    const copySignUpInfo = { ...signupInfo };
    copySignUpInfo[name] = value;
    setSignupInfo(copySignUpInfo);
  };

  const handelSignUp = async (e) => {
    e.preventDefault();
    const { name, username, password } = signupInfo;
    if (!name || !username || !password) {
      return handelError("name, username, password are required");
    }

    try {
      const url = "http://localhost:8080/api/v1/user/register";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupInfo),
      });
      const result = await response.json();
      const { success, message } = result;
      console.log("Register result:", result);

      if (response.ok && success) {
        handelSuccess(message || "Registration successful");
        setTimeout(() => {
          navigate("/signup");
        }, 1000);
      } else {
        handelError(message || "Registration failed");
      }
    } catch (err) {
      handelError(err.message || err);
    }
  };

  return (
    <>
      <div className="container-box">
        <div className="container-iner">
          <form onSubmit={handelSignUp}>
            <div className="heading">
              <p>Sign Up</p>
            </div>
            <div>
              <input
                onChange={handelChenge}
                type="text"
                placeholder="Name"
                name="name"
                value={signupInfo.name}
              />{" "}
              <br />
            </div>

            <div>
              <input
                onChange={handelChenge}
                type="text"
                placeholder="Username"
                name="username"
                value={signupInfo.username}
              />{" "}
              <br />
            </div>

            <div>
              <input
                onChange={handelChenge}
                type="password"
                placeholder="Password"
                name="password"
                value={signupInfo.password}
              />
              <br />
            </div>
            <button className="btn btn-primary">Sign Up</button>
            <hr />
          </form>
          
        </div>
      </div>
    </>
  );
}

export default Register;
