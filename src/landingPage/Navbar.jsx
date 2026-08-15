import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar() {

  const [loggedInUser, setLoggedInUser] = useState('');
  useEffect(() => {
    setLoggedInUser(localStorage.getItem("token"));
  }, [])
  

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{padding: "0px", position: "fixed", width: "100%", zIndex: "9999"}}>
      <div className="container-fluid" id="Nav-bar">
        <Link className="navbar-brand" to="/">
          <img className="Logo" src="/1000043384-removebg-preview.png" alt="Logo" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false back"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
          </ul>


          <div className="link-box">

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>

              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/action">
                    Action
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/another-action">
                    Another action
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/developer-info">
                    Developer Info
                  </Link>
                </li>
              </ul>
            </li>
            <Link to={"/usersdatapage"} className="Link-Nav">Add Data</Link>
            <Link to={"/signup"} className="Link-Nav">Login</Link>
            |
            <Link to={"/register"} className="Link-Nav">SignUp</Link>
          </div>

        </div>
      </div>
    </nav>
    
  );
}

export default Navbar;
