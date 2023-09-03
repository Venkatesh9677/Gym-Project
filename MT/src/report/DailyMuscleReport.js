import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/routes/Layout';
import { format } from 'date-fns-tz';

const DailyMuscleReport = () => {
  const { msId } = useParams();

  const [muscleData, setMuscleData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/daily-muscle-report/${msId}`)
      .then(response => response.json())
      .then(data => {
        // Convert date strings to the desired time zone (adjust 'YourTimeZone' accordingly)
        const timeZone = 'YourTimeZone'; // Replace with the appropriate time zone identifier
        const convertedData = data.map(exercise => ({
          ...exercise,
          date_of_exercise: format(new Date(exercise.date_of_exercise), 'yyyy-MM-dd HH:mm:ss', { timeZone }), // Change the format here
        }));

        setMuscleData(convertedData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [msId]);
  
    
  return (
    <>
      <Layout />
      <div className="container mt-5">
        <h1 className="text-center mb-4">Daily Muscle Exercise Report</h1>
        <div className="row">
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Exercise Name</th>
                  <th>Date</th>
                  <th>Sets</th>
                  <th>Reps</th>
                  {/* <th>Weight</th> */}
                </tr>
              </thead>
              <tbody>
                {muscleData.map((exercise, index) => (
                  <tr key={index}>
                    <td>{exercise.exerciseName}</td>
                    <td>{exercise.date_of_exercise}</td>
                    <td>{exercise.sets}</td>
                    <td>{exercise.reps}</td>
                    {/* <td>{exercise.weight}</td> */}
                  </tr>
                ))}
              </tbody>
            </table>
            {muscleData.length === 0 && (
              <p className="text-center">No muscle exercise data available for today.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DailyMuscleReport;
