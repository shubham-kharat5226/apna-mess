import React from "react";
import { useState } from "react";
import { handelError, handelSuccess } from "../../util";
import "../../../src/styles/UserDataPage.css";

function UsersDataPage() {
  const [userData, setUserData] = React.useState({
    name: "",
    userNum: "",
    mobile: "",
    subdistrict: "",
    district: "",
    city: "",
    payment: "",
    datemonth: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    const copyUserData = { ...userData };
    copyUserData[name] = value;
    setUserData(copyUserData);
  };

  const handelDataSubmit = async (e) => {
    e.preventDefault();

    const { name, mobile, subdistrict, district, city, payment, datemonth, userNum } =
      userData;
    if (
      !name ||
      !mobile ||
      !subdistrict ||
      !district ||
      !city ||
      !payment ||
      !datemonth ||
      !userNum
    ) {
      handelError("All fields are required");
      return;
    }

    try {
      const url = "http://localhost:8080/api/v1/userdata";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: userData.name,
          number: Number(userData.mobile),
          subdistrict: userData.subdistrict,
          district: userData.district,
          city: userData.city,
          payment: userData.payment,
          datemonth: userData.datemonth,
          userNum: userData.userNum,
        }),
      });

      const result = await response.json();
      console.log(result);
      if (response.ok) {
        handelSuccess(result.message || "User data added");
      } else {
        handelError(result.message || "Failed to add user data");
      }
    } catch (e) {
      handelError(e.message || "Network error");
    }
  };

  return (
    <>
      <div className="container">
        <div className="container-inner">
          <form onSubmit={handelDataSubmit}>
            <h2 className="form-heading">Please provide your Information</h2>

            <div className="mb-3">
              <label htmlFor="exampleInputName1" className="form-label">
                Name
              </label>

              <input
                type="text"
                onChange={handleInputChange}
                name="name"
                value={userData.name}
                placeholder="Enter your name"
                className="form-control"
                id="exampleInputName1"
                aria-describedby="nameHelp"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputuserNum1" className="form-label">
                Daily use number
              </label>

              <input
                type="text"
                onChange={handleInputChange}
                name="userNum"
                value={userData.userNum}
                placeholder="Enter your daily use number"
                className="form-control"
                id="exampleInputuserNum1"
                aria-describedby="userNumHelp"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputMobile1" className="form-label">
                Mobile Number
              </label>

              <input
                type="text"
                onChange={handleInputChange}
                name="mobile"
                value={userData.mobile}
                placeholder="Enter mobile number"
                className="form-control"
                id="exampleInputMobile1"
                aria-describedby="mobileHelp"
              />
            </div>

            <div className="three-inputs">
              <div className="mb-3">
                <label htmlFor="exampleInputdistrict1" className="form-label">
                  district
                </label>

                <input
                  type="text"
                  onChange={handleInputChange}
                  name="district"
                  value={userData.district}
                  placeholder="Enter your district"
                  className="form-control"
                  id="exampleInputdistrict1"
                  aria-describedby="districtHelp"
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="exampleInputsubdistrict1"
                  className="form-label"
                >
                  subdistrict
                </label>

                <input
                  type="text"
                  onChange={handleInputChange}
                  name="subdistrict"
                  value={userData.subdistrict}
                  placeholder="Enter your subdistrict"
                  className="form-control"
                  id="exampleInputsubdistrict1"
                  aria-describedby="subdistrictHelp"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputcity1" className="form-label">
                  city
                </label>

                <input
                  type="text"
                  onChange={handleInputChange}
                  name="city"
                  value={userData.city}
                  placeholder="Enter your city"
                  className="form-control"
                  id="exampleInputcity1"
                  aria-describedby="cityHelp"
                />
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputPayment1" className="form-label">
                Payment
              </label>

              <input
                type="text"
                onChange={handleInputChange}
                name="payment"
                value={userData.payment}
                placeholder="Enter your payment"
                className="form-control"
                id="exampleInputPayment1"
                aria-describedby="paymentHelp"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputdatemonth1" className="form-label">
                date & Info
              </label>

              <input
                type="text"
                onChange={handleInputChange}
                name="datemonth"
                value={userData.datemonth}
                placeholder="dd/mm/yyyy & write your info"
                className="form-control"
                id="exampleInputdatemonth1"
                aria-describedby="datemonthHelp"
              />
            </div>

            <div className="d-grid gap-2 sb-btn">
              <button className="btn btn-primary" type="submit">
                Button
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default UsersDataPage;
