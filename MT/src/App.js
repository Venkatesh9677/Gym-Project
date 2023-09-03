import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes,Navigate } from "react-router-dom";
import AdminLogin from "./components/routes/AdminLogin";
import UserLogin from "./components/routes/UserLogin";
import RegisterComponent from "./components/routes/RegisterComponent";
import UserReport from "../src/report/UserReport";
import Signup from "./components/routes/Signup";
import Homepage from "./components/routes/Homepage";
import AddRegister from "./components/routes/crud/AddRegister";
import ViewRegister from "./components/routes/crud/ViewRegister";
import ViewSignUp from "./components/routes/crud/ViewSignUp";
import Muscle from "../src/report/Muscle";
import Cardio from "../src/report/Cardio";
import Yoga from "../src/report/Stretch";
import DailyMuscleReport from "./report/DailyMuscleReport";
import WeeklyMuscleReport from "./report/WeeklyMuscleReport";
import MonthlyMuscleReport from "./report/MonthlyMuscleReport";
import ViewMuscle from "./components/routes/crud/ViewMuscle";
import ViewCardio from "./components/routes/crud/ViewCardio";
import ViewYoga from "./components/routes/crud/ViewYoga";

function App() {
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);

  return (
    <>
      <Router>
      <Routes>
    
    <Route path="/" element={<Homepage />} />
    <Route path="/admin"element={<AdminLogin setIsAdminAuthenticated = { setIsAdminAuthenticated } />}/>
    <Route path="/signup" element={<Signup />} />
    <Route path="/login" element={<UserLogin />} />
    <Route path="/report" element={<UserReport />} />
    <Route path="/register/allow" element= { isAdminAuthenticated ? (<RegisterComponent />) : (<Navigate to ="/admin" />) }/>
    <Route path="/register/*" element={<RegisterComponent />} />
    <Route path="/user-registration" element={<AddRegister />} />
    <Route path="/view-registration" element={<ViewRegister />} />
    <Route path="/view-signup" element={<ViewSignUp />} />
    <Route path="/view-muscle" element={<ViewMuscle />} />
    <Route path="/view-cardio" element={<ViewCardio />} />
    <Route path="/view-yoga" element={<ViewYoga />} />
    <Route path="/update-muscle/:msId" element={<Muscle />} />
    <Route path="/update-cardio/:msId" element={<Cardio />} />
    <Route path="/update-yoga/:msId" element={<Yoga />} />
    <Route path="/daily-muscle-report/:msId" element={<DailyMuscleReport />}/>
    <Route path="/weekly-muscle-report/:msId" element={<WeeklyMuscleReport />}/>
    <Route path="/monthly-muscle-report/:msId" element={<MonthlyMuscleReport />}/>
    
    </Routes>
    </Router>
    
    </>
);
}

export default App;
