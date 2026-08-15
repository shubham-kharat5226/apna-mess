import React from "react";
import { Link } from "react-router-dom";
import "../../../src/styles/Homepage.css";

function HomePage() {
  return (
    <>
      <div className="container-1">
        <div className="conatiner-inner">
          <h1 className="image-cont-heading">
            SHRI KRUSHANA <br /> BHOJNALAYA
          </h1>
          <Link to={"/userdata"} class="btn btn-primary btn-lg start-btn">Start now</Link>
          <br /><br /><br /><br /><br /><br />
          <div className="bottom-content">
            <p>+91 80XXXXXXXX</p>
            <Link to={"https://www.linkedin.com/in/shubham-kharat-b7930841b/"} className="bottom-link linkedln" target="__main"><i class="fa-brands fa-linkedin"></i></Link>
            <Link to={"https://www.instagram.com/shubham_kharat_70/"} className="bottom-link instagram" target="__main"><i class="fa-brands fa-square-instagram"></i></Link>
            <Link to={"https://github.com/shubham-kharat5226"} className="bottom-link" target="__main"><i class="fa-brands fa-github"></i></Link>
          </div>
        </div>
        <div className="mess-content">
          <p>
            Welcome to our clean, hygienic, and affordable mess, where we
            believe that good food should feel just like home. We provide fresh,
            nutritious, and delicious homemade-style meals for students, working
            professionals, hostel residents, and families. <br /> <br />
            Our meals are prepared using fresh vegetables, quality ingredients,
            and traditional cooking methods. We focus on maintaining proper
            hygiene and cleanliness at every stage, from food preparation to
            serving. Our menu includes a variety of traditional Maharashtrian
            and Indian vegetarian dishes, giving you a healthy and satisfying
            dining experience.
          </p>
        </div>

        <div className="cards">
          <div className="card" style={{ width: "18rem" }}>
            <img src="thali.png" className="card-img-top" alt="Card" />

            <div className="card-body">
              <h5 className="card-title">step 4</h5>

              <p className="card-text">
                his meal represents the rich flavors and comforting taste of
                authentic homemade Indian food.
              </p>
            </div>
          </div>

          <div className="card" style={{ width: "18rem" }}>
            <img src="wheat-power.jpg" className="card-img-top" alt="Card" />

            <div className="card-body">
              <h5 className="card-title">step 3</h5>

              <p className="card-text">
                The warm rustic setting highlights the natural origins of wheat
                and its importance in traditional cooking.
              </p>
            </div>
          </div>

          <div className="card" style={{ width: "18rem" }}>
            <img
              src="wheat-clean-tracter.jpg"
              className="card-img-top"
              alt="Card"
            />

            <div className="card-body">
              <h5 className="card-title">step 2</h5>

              <p className="card-text">
                The scene showcases traditional farming work, modern
                agricultural machinery.
              </p>
            </div>
          </div>

          <div className="card" style={{ width: "18rem" }}>
            <img src="farmer-sides1.jpg" className="card-img-top" alt="Card" />

            <div className="card-body">
              <h5 className="card-title">step 1</h5>

              <p className="card-text">
                A farmer wearing traditional attire works in a lush green field,
                watering the crops with a hand-held basket.
              </p>
            </div>
          </div>
        </div>

        <div className="student-image">
          <p>image</p>
        </div>
      </div>
    </>
  );
}

export default HomePage;
