import React from "react";
import { Link, useLocation } from "react-router-dom";
import Layout from "../components/routes/Layout";

const UserReport = () => {
  const location = useLocation();
  const { msId, firstName, lastName } = location.state;

  return (
    <>
      <Layout />
      
      <div className="container mt-5">
        <h1 className="text-center mb-4">
          {firstName && lastName ? `Welcome ${firstName} ${lastName}` : ""}
        </h1>

        <div className="container mt-5">
          <h1 className="text-center mb-4">User Data Dashboard</h1>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card bg-primary text-white h-100">
                <div className="card-body text-center">
                  <h2>Muscle Data</h2>
                  <p>Add Muscle Data</p>
                  <Link
                    to={`/update-muscle/${msId}`}
                    className="btn btn-light mt-3"
                  >
                    Update
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card bg-success text-white h-100">
                <div className="card-body text-center">
                  <h2>Cardio Data</h2>
                  <p>Add cardio data</p>
                  <Link
                    to={`/update-cardio/${msId}`}
                    className="btn btn-light mt-3"
                  >
                    Update
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card bg-warning text-white h-100">
                <div className="card-body text-center">
                  <h2>Yoga Data</h2>
                  <p>Add yoga data</p>
                  <Link
                    to={`/update-yoga/${msId}`}
                    className="btn btn-light mt-3"
                  >
                    Update
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Daily, Weekly, and Monthly Report Links */}
        <div className="container mt-5">
          <h2 className="text-center mb-4">Muscle Data Reports</h2>
          <div className="row justify-content-center">
            <div className="col-md-4 mb-4">
              <div className="card bg-info text-white h-100">
                <div className="card-body text-center">
                  <h3>Daily Report</h3>
                  <Link
                    to={`/daily-muscle-report/${msId}`}
                    className="btn btn-light mt-3"
                  >
                    View
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card bg-success text-white h-100">
                <div className="card-body text-center">
                  <h3>Weekly Report</h3>
                  <Link
                    to={`/weekly-muscle-report/${msId}`}
                    className="btn btn-light mt-3"
                  >
                    View
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card bg-warning text-white h-100">
                <div className="card-body text-center">
                  <h3>Monthly Report</h3>
                  <Link
                    to={`/monthly-muscle-report/${msId}`}
                    className="btn btn-light mt-3"
                  >
                    View
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserReport;
