import React from 'react';
import { Link } from 'react-router-dom'; 
import Layout from './Layout';

const RegisterComponent = () => {
  return (
    <>
      <Layout />
  <div className="container mt-5"><h1 className="text-center mb-4">Admin Dashboard</h1>
  <div className="row justify-content-center">
     
  
  <div className="col-lg-4 col-md-6 mb-4">
  <div className="card bg-primary text-white h-100">
  <div className="card-body text-center"><h2>User Registration</h2><p>Add and manage user registrations</p>
   <Link to="/user-registration" className="btn btn-light mt-3">Add Registration</Link>
  </div>
  </div>
  </div>
 
 <div className="col-lg-4 col-md-6 mb-4">
 <div className="card bg-success text-white h-100">
 <div className="card-body text-center"><h2 style={{fontSize:"31px"}}>View User Registration</h2><p>View and analyze user registrations</p>
 <Link to="/view-registration" className="btn btn-light mt-3">View Registrations</Link>
 </div>
 </div>
 </div>
  
 <div className="col-lg-4 col-md-6 mb-4">
 <div className="card bg-info text-white h-100">
 <div className="card-body text-center"><h2>User Data</h2><p>Explore signup user data</p>
 <Link to="/view-signup" className="btn btn-light mt-3">View Signup Data</Link>
</div>
</div>
</div>
          
<div className="col-lg-4 col-md-6 mb-4">
<div className="card bg-secondary text-white h-100">
<div className="card-body text-center"><h2>User Data</h2><p>Explore muscle user data</p>
<Link to="/view-muscle" className="btn btn-light mt-3">View muscle Data</Link>
</div>
</div>
</div>

<div className="col-lg-4 col-md-6 mb-4">
<div className="card bg-dark text-white h-100">
<div className="card-body text-center"><h2>User Data</h2><p>Explore cardio user data</p>
<Link to="/view-cardio" className="btn btn-light mt-3">View Cardio Data</Link>
</div>
</div>
</div>

<div className="col-lg-4 col-md-6 mb-4">
<div className="card bg-light text-black h-100">
<div className="card-body text-center"><h2>User Data</h2><p>Explore yoga & stretch user data</p>
<Link to="/view-yoga" className="btn btn-light mt-3">View Yoga & Stretch Data</Link>
</div>
</div>
</div>


</div>
</div>

</>

);
};

export default RegisterComponent;
