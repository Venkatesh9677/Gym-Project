import React, { useState, useEffect } from 'react';
import Layout from '../Layout';

const ViewCardio = () => {
  const [cardioData, setCardioData] = useState([]);

  useEffect(() => {
    // Fetch data from your API endpoint for cardio exercise data
    fetch("http://localhost:5000/getCardioExerciseData")  // Replace with your API endpoint for cardio exercise data
      .then((response) => response.json())
      .then((data) => {
        const sortedData = data.sort((a, b) => new Date(b.created_time) - new Date(a.created_time));
        setCardioData(sortedData)})
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <Layout />
      <div className="container mt-2">
        <div className="cover-card px-3 mt-1">
          <h3 className="cover-title py-3">View Cardio Exercise Data</h3>
          <div className="table-container" style={{ maxHeight: "400px", overflowY: "auto" }}>
            <table className="table table-bordered table-striped">
              <thead className="thead-light">
                <tr>
                  <th>ID</th>
                  <th>msId</th>
                  <th>Exercise Name</th>
                  <th>Date</th>
                  <th>Duration (minutes)</th>
                  <th>Distance (km)</th>
                  <th>Calories Burned</th>
                </tr>
              </thead>
              <tbody>
                {cardioData.map((row) => (
                  <tr key={row.id}>
                    <td>{row.id}</td>
                    <td>{row.msId}</td>
                    <td>{row.exercise_name}</td>
                    <td>{row.date_of_exercise}</td>
                    <td>{row.duration_minutes}</td>
                    <td>{row.distance_km}</td>
                    <td>{row.calories_burned}</td>
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

export default ViewCardio;
