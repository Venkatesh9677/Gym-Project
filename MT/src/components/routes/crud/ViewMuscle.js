import React, { useState, useEffect } from 'react';
import Layout from '../Layout';

const ViewMuscle = () => {
  const [muscleData, setMuscleData] = useState([]);

  useEffect(() => {
    // Fetch data from your API endpoint
    fetch("http://localhost:5000/getMuscleBuildingData")  // Replace with your API endpoint for muscle building data
      .then((response) => response.json())
      .then((data) => {
        const sortedData = data.sort((a, b) => new Date(b.created_time) - new Date(a.created_time));
        setMuscleData(sortedData)})
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <Layout />
      <div className="container mt-2">
        <div className="cover-card px-3 mt-1">
          <h3 className="cover-title py-3">View Muscle Building Data</h3>
          <div className="table-container" style={{ maxHeight: "400px", overflowY: "auto" }}>
            <table className="table table-bordered table-striped">
              <thead className="thead-light">
                <tr>
                  <th>ID</th>
                  <th>msId</th>
                  <th>Exercise Name</th>
                  <th>Date</th>
                  <th>Sets</th>
                  <th>Reps</th>
                  <th>Weight</th>
                </tr>
              </thead>
              <tbody>
                {muscleData.map((row) => (
                  <tr key={row.id}>
                    <td>{row.id}</td>
                    <td>{row.msId}</td>
                    <td>{row.exerciseName}</td>
                    <td>{row.date_of_exercise}</td>
                    <td>{row.sets}</td>
                    <td>{row.reps}</td>
                    <td>{row.weight}</td>
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

export default ViewMuscle;
