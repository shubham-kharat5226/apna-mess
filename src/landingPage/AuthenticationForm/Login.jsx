import React, { useState } from "react";
import { handelError, handelSuccess } from "../../util";
import { useNavigate } from "react-router-dom";

function Login() {
  const [signupInfo, setSignupInfo] = useState({
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
    const { username, password } = signupInfo;
    if (!username || !password) {
      return handelError("Username, password are required");
    }

    try {
      const url = "http://localhost:8080/api/v1/user/login";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupInfo),
      });
      const result = await response.json();
      const { name } = result;
      

      if (response.status === 200) {
        handelSuccess("Login Success");
        localStorage.setItem("token", result.token);
        localStorage.setItem("loggedInUser", name);
        navigate("/");
      } else if (response.status === 404) {
        handelError("User Not Found");
      } else {
        handelError("Something went wrong");
      }
    } catch (err) {
      handelError(err);
    }
  };

  return (
    <>
      <div className="container-box">
        <div className="container-iner">
          <form onSubmit={handelSignUp}>
            <div className="heading">
              <p>Login</p>
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
            <button className="btn btn-primary">Login</button>
            <hr />
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
