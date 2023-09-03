import React, { useState } from "react";
import Layout from "../Layout";



const AddRegister = () => {
  const [formData, setFormData] = useState({
    ms_id: "",
    first_name: "",
    last_name: "",
    gender: "",
    date_of_birth: "",
    id_proof: "",
    id_number: "",
    phone_number: "",
    email: "",
    address_1: "",
    address_2: "",
    address_3: "",
    pincode: "",
    payment_mode: "",
    emergency_contact: "",
    membership_period: "",
    height: "",
    weight: "",
    date_of_joining: "",
  });
  const [serverFeedback, setServerFeedback] = useState("");
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
     const generatedId = Math.floor(10000 + Math.random() * 90000);
     fetch("http://localhost:5000/register", {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify({ ...formData, ms_id: generatedId }),
     })
       .then((response) => response.text())
       .then((data) => {
         setServerFeedback(data);

         setFormData({
           first_name: "",
           last_name: "",
           gender: "",
           date_of_birth: "",
           id_proof: "",
           id_number: "",
           phone_number: "",
           email: "",
           address_1: "",
           address_2: "",
           address_3: "",
           pincode: "",
           payment_mode: "",
           emergency_contact: "",
           membership_period: "",
           height: "",
           weight: "",
           date_of_joining: "",
         });
              })
       .catch((error) => console.error("Error submitting form:", error));
    
 };

  return (
    <> 
  <Layout/>
    <div className="container mt-2">
      <div className="cover-card px-3 mt-1">
        <h2 className="cover-title py-3">Registration Form</h2>
        <form onSubmit={handleSubmit} className="reg-group">
          <div className="row">
            <div className="col-md-4 mb-3">
              <label htmlFor="first_name">First Name</label>
              <input
                type="text"
                className="form-control px-3 "
                id="first_name"
                value={formData.first_Name}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="last_name">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="last_name"
                value={formData.last_Name}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-2 mb-3">
              <label htmlFor="gender">Gender</label>
              <select
                className="form-control"
                id="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="col-md-2 mb-3">
              <label htmlFor="date_of_birth">Date of Birth</label>
              <input
                type="date"
                className="form-control"
                id="date_of_birth"
                value={formData.date_Of_Birth}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-2 mb-3">
              <label htmlFor="id_proof">ID Proof</label>
              <select
                className="form-control"
                id="id_proof"
                value={formData.id_Proof}
                onChange={handleChange}
              >
                <option value="">Select ID Proof</option>
                <option value="pan">Pan</option>
                <option value="aadhar">Aadhar</option>
                <option value="otherid">Other ID's</option>
              </select>
            </div>
            <div className="col-md-2 mb-3">
              <label htmlFor="id_number">ID number</label>
              <input
                type="tel"
                className="form-control"
                id="id_number"
                value={formData.id_Number}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-3 mb-3">
              <label htmlFor="phone_number">Phone number</label>
              <input
                type="tel"
                className="form-control"
                id="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-3 mb-3">
              <label htmlFor="emergency_contact">Emergency Contact no</label>
              <input
                type="tel"
                className="form-control"
                id="emergency_contact"
                value={formData.emergency_Contact}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-2 mb-3">
              <label htmlFor="date_of_joining">Date of Joining</label>
              <input
                type="date"
                className="form-control"
                id="date_of_joining"
                value={formData.date_Of_Joining}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-3 mb-3">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-4 mb-3">
              <label htmlFor="address_1">Address1(house/flat)</label>
              <input
                type="text"
                className="form-control"
                id="address_1"
                value={formData.address_1}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-3 mb-3">
              <label htmlFor="address_2">Address2(Street)</label>
              <input
                type="text"
                className="form-control"
                id="address_2"
                value={formData.address_2}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-2 mb-3">
              <label htmlFor="address_3">Address3(Area)</label>
              <input
                type="text"
                className="form-control"
                id="address_3"
                value={formData.address_3}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-2 mb-3">
              <label htmlFor="pincode">Pincode</label>
              <input
                type="number"
                className="form-control"
                id="pincode"
                value={formData.pincode}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-3 mb-3">
              <label htmlFor="payment_mode">Payment Mode</label>
              <select
                className="form-control"
                id="payment_mode"
                value={formData.payment_mode}
                onChange={handleChange}
              >
                <option value="">Select Payment Mode</option>
                <option value="upi">UPI</option>
                <option value="neft/rtgs">NEFT/RTGS</option>
                <option value="card">Debit/Credit Card</option>
              </select>
            </div>

            <div className="col-md-3 mb-3">
              <label htmlFor="membership_period">Membership Period</label>
              <select
                className="form-control"
                id="membership_period"
                value={formData.membership_period}
                onChange={handleChange}
              >
                <option value="">Select Membership Period</option>
                <option value="monthly">Monthly</option>
                <option value="quarterly">Quarterly</option>
                <option value="halfyearly">Half-yearly</option>
                <option value="yearly">Yearly</option>
              </select>
            </div>

            <div className="col-md-2 mb-3">
              <label htmlFor="height">Height in cm's</label>
              <select
                className="form-control"
                id="height"
                value={formData.height}
                onChange={handleChange}
              >
                <option value="">Select Height</option>
                {Array.from({ length: 46 }, (_, i) => 140 + i).map((value) => (
                  <option key={value} value={value}>
                    {value} cm
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-2 mb-3">
              <label htmlFor="weight">Weight in kg's</label>
              <select
                className="form-control"
                id="weight"
                value={formData.weight}
                onChange={handleChange}
              >
                <option value="">Select Weight</option>
                {Array.from({ length: 71 }, (_, i) => 50 + i).map((value) => (
                  <option key={value} value={value}>
                    {value} kg
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="d-grid gap-1 col-4 mx-auto py-2">
            <button className="btn btn-primary py-3" onClick={handleSubmit}>
              Create
            </button>
          </div>
          <div className="mt-2 text-center">
            <p>{serverFeedback}</p>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default AddRegister;
