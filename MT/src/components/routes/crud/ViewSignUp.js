import React, { useState, useEffect } from 'react';
import Layout from '../Layout';

const ViewSignUp = () => {
  const [signupData, setSignupData] = useState([]);

  useEffect(() => {
    // Fetch data from your API endpoint
    fetch("http://localhost:5000/getSignUpData")  // Replace with your API endpoint
      .then((response) => response.json())
      .then((data) => {
        const sortedData = data.sort((a, b) => new Date(b.created_time) - new Date(a.created_time));
        setSignupData(sortedData)})
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
   <Layout/>
    <div className="container mt-2">
      <div className="cover-card px-3 mt-1">
        <h3 className="cover-title py-3">View Signup Data</h3>
        <div className="table-container" style={{ maxHeight: "400px", overflowY: "auto" }}>
          <table className="table table-bordered table-striped">
            <thead className="thead-light">
              <tr>
                <th>ID</th>
                <th>msId</th>
                <th>Username</th>
                <th>Password</th>
            
              </tr>
            </thead>
            <tbody>
              {signupData.map((row) => (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>{row.msId}</td>
                  <td>{row.username}</td>
                  <td>{row.password}</td>
                 
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
  );
}

export default ViewSignUp;
