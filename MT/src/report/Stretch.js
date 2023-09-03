import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import Layout from "../components/routes/Layout";

const Yoga = () => {
  const [formData, setFormData] = useState({
    msId:"",
    exerciseName: "",
    date: "",
    duration: "",
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
      exercise_name: formData.exerciseName,
      date_of_exercise: formData.date,
      duration_minutes: formData.duration,
      calories_burned: formData.caloriesBurned,
    };
    fetch("http://localhost:5000/save_yoga_stretching", {
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
          caloriesBurned: "",
        });
      })
      .catch((error) => console.error("Error submitting form:", error));
  };

  return (
    <>
    <Layout/>
    <div className="container mt-5">
    <h1 className="text-center mb-4">Update Yoga & stretch Data </h1>
   
    <div className="container mt-6" style={{ maxWidth: "1200px" }}>
      <div className="cover-card px-3 mt-2">
        <h2 className="cover-title py-3">Yoga and Stretching Exercise Report</h2>
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
                <option value="Yoga">Yoga</option>
                <option value="Stretching">Stretching</option>
       
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
            <div className="col-md-3 mb-3">
              <label htmlFor="duration">Duration (minutes)</label>
              <input
                type="text"
                className="form-control"
                id="duration"
                value={formData.duration}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-3 mb-3">
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

export default Yoga;
