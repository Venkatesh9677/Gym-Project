import React, { useState, useEffect } from 'react';
import Layout from '../Layout';

const ViewRegister = () => {
  const [registrations, setRegistrations] = useState([]);
  useEffect(() => {
    // Fetch data from your API endpoint
    fetch("http://localhost:5000/getRegistrations")  // Replace with your API endpoint
      .then((response) => response.json())
      .then((data) => {
        const sortedData = data.sort((a, b) => new Date(b.created_time) - new Date(a.created_time));
        setRegistrations(sortedData)})
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
    <Layout/>
    <div className="container mt-2">
        <div className="cover-card px-3 mt-1">
      <h3  className="cover-title py-3" >View Registrations</h3>
      <div className="table-container" style={{ maxHeight: "400px", overflowY: "auto" }}>
      <table className=" table table-bordered table-striped">
        <thead className="thead-light">
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Date of Birth</th>
            <th>ID Proof</th>
            <th>ID Number</th>
            <th>Phone Number</th>
            <th>Emergency Contact</th>
            <th>Date of Joining</th>
            <th>Email</th>
            <th>Address 1</th>
            <th>Address 2</th>
            <th>Address 3</th>
            <th>Pincode</th>
            <th>Payment Mode</th>
            <th>Membership Period</th>
            <th>Height</th>
            <th>Weight</th>
          </tr>
        </thead>
        <tbody>
          {registrations.map(registration => (
            <tr key={registration.id}>
              <td>{registration.ms_id}</td>
              <td>{registration.first_name}</td>
              <td>{registration.last_name}</td>
              <td>{registration.gender}</td>
              <td>{registration.date_of_birth}</td>
              <td>{registration.id_proof}</td>
              <td>{registration.id_number}</td>
              <td>{registration.phone_number}</td>
              <td>{registration.emergency_contact}</td>
              <td>{registration.date_of_joining}</td>
              <td>{registration.email}</td>
              <td>{registration.address_1}</td>
              <td>{registration.address_2}</td>
              <td>{registration.address_3}</td>
              <td>{registration.pincode}</td>
              <td>{registration.payment_mode}</td>
              <td>{registration.membership_period}</td>
              <td>{registration.height}</td>
              <td>{registration.weight}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    </div>
    </>
  );
};

export default ViewRegister;
