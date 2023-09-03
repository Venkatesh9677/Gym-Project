import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/routes/Layout';

const MonthlyMuscleReport = () => {
  const { msId } = useParams();

  const [muscleData, setMuscleData] = useState([]);

  useEffect(() => {
    // Fetch the monthly muscle exercise report data using an API call and set it to muscleData state
    fetch(`http://localhost:5000/monthly-muscle-report/${msId}`)
      .then(response => response.json())
      .then(data => setMuscleData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, [msId]);

  return (
    <>
      <Layout />
      <div className="container mt-5">
        <h1 className="text-center mb-4">Monthly Muscle Exercise Report</h1>
        <div className="row">
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Exercise Name</th>
                  <th>Total Sets</th>
                  <th>Total Reps</th>
                  <th>Total Weight</th>
                </tr>
              </thead>
              <tbody>
                {muscleData.map((month, index) => (
                  <tr key={index}>
                    <td>{month.exerciseName}</td>
                    <td>{month.totalSets}</td>
                    <td>{month.totalReps}</td>
                    <td>{month.totalWeight}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {muscleData.length === 0 && (
              <p className="text-center">No muscle exercise data available for this month.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MonthlyMuscleReport;
