import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import Layout from "../components/routes/Layout";

const Muscle = () => {
  const [formData, setFormData] = useState({
    msId:"",
    exerciseName: "",
    date: "",
    sets: "",
    reps: "",
   
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
      exerciseName: formData.exerciseName,
      date_of_exercise: formData.date,
      sets: formData.sets,
      reps: formData.reps,
     
    };
    fetch("http://localhost:5000/save_muscle_building", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(exerciseData),
    })
      .then((response) => response.text())
      .then((data) => {
        setServerFeedback(data);
        setFormData({
          exerciseName: "",
          date: "",
          sets: "",
          reps: "",
       
        });
      })
      .catch((error) => console.error("Error submitting form:", error));
  };
  
    
      return (
        <>
        <Layout/>
        <div className="container mt-5">
        <h1 className="text-center mb-4">Update Muscle Data </h1>
   
      
        <div className="container mt-6" style={{ maxWidth: "1200px" }} >
        <div className="cover-card px-3 mt-2">
          <h2 className="cover-title py-3">Muscle Exercise Report</h2>
          <form onSubmit={generateReport}  className="reg-group" >
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
                  <option value="Bench Press">Bench Press</option>
                  <option value="Squat">Squat</option>
                  <option value="Deadlift">Deadlift</option>
                  <option value="Pull-up">Pull-up</option>
                  <option value="Push-up">Push-up</option>
               
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
                <label htmlFor="sets">Sets</label>
                <input
                  type="text"
                  className="form-control"
                  id="sets"
                  value={formData.sets}
                  onChange={handleChange}
                />
              </div>
              
              <div className="col-md-2 mb-3">
                <label htmlFor="reps">Reps</label>
                <input
                  type="text"
                  className="form-control"
                  id="reps"
                  value={formData.reps}
                  onChange={handleChange}
                />
              </div>
              {/* <div className="col-md-2 mb-3">
                <label htmlFor="weight">Weight</label>
                <input
                  type="text"
                  className="form-control"
                  id="weight"
                  value={formData.weight}
                  onChange={handleChange}
                />
              </div> */}
            </div>
            <div className=" d-grid col-4 mx-auto py-2">
              <button className="btn btn-primary py-2" type="submit" onClick={generateReport}>
             Update
              </button>
            </div>
            {/* {report && (
              <div className="report">
                <h3>Generated Report:</h3>
                <pre>{report}</pre>
              </div>
            )} */}

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

export default Muscle;