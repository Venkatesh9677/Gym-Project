import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import Layout from "../components/routes/Layout";


const Cardio = () => {
  const [formData, setFormData] = useState({
    msId:"",
    exerciseName: "",
    date: "",
    duration: "",
    distance: "",
    caloriesBurned: "",
  });
  const [serverFeedback, setServerFeedback] = useState("");
  const { msId } = useParams();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const generateReport = (e) => {
    e.preventDefault();

    const exerciseData = {
      msId:msId,
      exercise_Name: formData.exerciseName,
      date_of_exercise: formData.date,
      duration_minutes: formData.duration,
      distance_km: formData.distance,
      calories_burned: formData.caloriesBurned,
    };
    fetch("http://localhost:5000/save_cardio", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(exerciseData),
    })
      .then((response) => response.text())
      .then((data) => {
        setServerFeedback(data);
        // Clear the form after successful submission
        setFormData({
          exerciseName: "",
          date: "",
          duration: "",
          distance: "",
          caloriesBurned: "",
        });
      })
      .catch((error) => console.error("Error submitting form:", error));
  };

  return (
    <>
    <Layout/>
    <div className="container mt-5">
        <h1 className="text-center mb-4">Update Cardio Data </h1>
    <div className="container mt-6" style={{ maxWidth: "1200px" }}>
      <div className="cover-card px-3 mt-2">
        <h2 className="cover-title py-3">Cardio Exercise Report</h2>
        <form onSubmit={generateReport}  className="reg-group">
          <div className="row">
          <div className="col-md-3 mb-3">
                  <label htmlFor="msId">User ID (msId)</label>
                  <input
                    type="text"
                    className="form-control"
                    id="msId"
                    value={msId}
                    readOnly
                  />
                </div>
            <div className="col-md-3 mb-3">
              <label htmlFor="exerciseName">Exercise Name</label>
              <select
                className="form-control px-3"
                id="exerciseName"
                value={formData.exerciseName}
                onChange={handleChange}
              >
                <option value="">Select an exercise</option>
                <option value="Running">Running</option>
                <option value="Cycling">Cycling</option>
                <option value="Swimming">Swimming</option>
                <option value="Jump Rope">Jump Rope</option>
          
              </select>
            </div>
            <div className="col-md-3 mb-3">
              <label htmlFor="date">Date of Exercise</label>
              <input
                type="date"
                className="form-control"
                id="date"
                value={formData.date}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-2 mb-3">
              <label htmlFor="duration">Duration (minutes)</label>
              <input
                type="text"
                className="form-control"
                id="duration"
                value={formData.duration}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-2 mb-3">
              <label htmlFor="distance">Distance (km/miles)</label>
              <input
                type="text"
                className="form-control"
                id="distance"
                value={formData.distance}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-2 mb-3">
              <label htmlFor="caloriesBurned">Calories Burned</label>
              <input
                type="text"
                className="form-control"
                id="caloriesBurned"
                value={formData.caloriesBurned}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="d-grid col-4 mx-auto py-2">
            <button
              className="btn btn-primary py-2"
              type="submit"
              onClick={generateReport}
            >
              Update
            </button>
          </div>
          <div className="mt-3 text-center">
            <p>{serverFeedback}</p>
          </div>
        </form>
      </div>
    </div>
    </div>
    </>
  );
};

export default Cardio;
