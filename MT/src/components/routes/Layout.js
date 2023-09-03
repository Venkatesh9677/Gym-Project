import React from 'react';
import Logo from '../assets/images/Logo.jpg';

const Layout = () => {
  const bk = () => {window.history.back();
  };

  return (
  <div className="Header" id="home">
  <nav className="navbar navbar-expand-lg navbar-light bg-light container">
 
  <a href="/" className="navbar-brand">MUSCLE TRAINER<img className="mtlogo" src={Logo} alt="" /></a>
  
  <button className="navbar-toggler" type="button"
  data-bs-toggle="collapse" data-bs-target="#navbarNav"
  aria-controls="navbarNav" aria-expanded="false" 
  aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span>
  </button>

<div className="collapse navbar-collapse" id="navbarNav">
<ul className="navbar-nav ml-auto">
<li className="nav-item"><a href="/" className="btn1 btn-primary nav-button">Home</a></li>
<li className="nav-item"><a href="/admin" className="btn1 btn-primary nav-button">Admin</a></li>
<li className="nav-item"><a href="/login" className="btn1 btn-primary nav-button">Login</a></li>
<li><a href="/signup" className="btn1 btn-primary nav-button">Sign Up</a></li>

<li><button onClick={bk} className="btn btn-primary nav-button">Back</button></li>

</ul>

</div>
</nav>

</div>
  );
};

export default Layout;
