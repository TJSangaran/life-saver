import React, { useState } from "react";
import "./DriverDetails.css"; // Import your CSS file
import { NavLink } from "react-router-dom";
import uploadSvg from "../upload.svg"; // Import the SVG file

function HospitalDetailsPage({ onPrevious, onNext }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [address, setAddress] = useState(""); // 'Government' or 'Private'
  const [registrationNo, setAmbulanceCompany] = useState("");
  const [password, setPassword] = useState("");
  const [conformPassword, setConformPassword] = useState("");
  const [email, setEmail] = useState("");
  const [nic, setNIC] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate and handle form submission logic here
    // You can also store the entered data in a state or context for later use

    // Navigate to the next page
    onNext();
  };

  return (
    <div className="HospitalDetailsPage">
      <h2>Ambulance Details</h2>
      <div className="hospital-details-container">
        {/* Center the form content */}
        <div className="centered-form">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phoneNo">Phone Number</label>
                <input
                  type="text"
                  id="phoneNo"
                  name="phoneNo"
                  value={phoneNo}
                  onChange={(e) => setPhoneNo(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="nic">
                <label htmlFor="nic">NIC</label>
                <input
                  type="text"
                  id="nic"
                  name="nic"
                  value={nic}
                  onChange={(e) => setNIC(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Center the upload input */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="conformPassword">Confirm Password</label>
                <input
                  type="text"
                  id="conformPassword"
                  name="conformPassword"
                  value={conformPassword}
                  onChange={(e) => setConformPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="button-group">
              <button style={{ color: "white" }}>
                <NavLink to="/OwnerDetails">Next</NavLink>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default HospitalDetailsPage;