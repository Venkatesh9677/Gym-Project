import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "./Layout";



const AdminLogin = ({ setIsAdminAuthenticated }) => {
  
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const passwordRef = useRef(null);
  const navigate = useNavigate(); 
 

  const checklogin = (e) => {e.preventDefault();
        if (username.trim() === "" && password === "") {setErrorMessage("Please fill in both username and password.");}
   else if (username.trim() === "") {setErrorMessage("Please fill in the username.");}   
   else if (password === "") {setErrorMessage("Please fill in the password.");}
   else if (username === "admin" && password === "1111") {setIsAdminAuthenticated(true); navigate("/register/allow");;} 
   else if (username === "admin") {setErrorMessage("Invalid password.");} 
   else if (password === "1111") {setErrorMessage("Invalid username.");} 
   else {setErrorMessage("Invalid username or password.");}
};

  const handleKeyDown = (e) => {
  if (e.key === "Enter") {e.preventDefault();
  if (e.target.name === "username") {passwordRef.current.focus();} // Move focus to the password input field
  else{checklogin(e);}  // Trigger the login function when "Enter" is pressed in the password input field
}  
};

  return (
    <>
<Layout/>

<section className="container py-5 justify-content-center  align-items-center vh-100 " style={{ maxWidth: "480px"}} id="login">

<div className="cover-card px-3 mt-3">
<h1 className="mb-1 text-center py-3">Admin Login</h1>

<form className="cover-group" onSubmit={checklogin} >

   <label className="cover-label">Username</label>
   <input type="text"name="username"placeholder="Enter username"className="form-control"value={username}onChange={(e) => setusername(e.target.value)} onKeyDown={handleKeyDown}/>
   
   <label className="cover-label">Password</label>
   <input name="password" type="password" placeholder="Enter password" className="form-control" value={password} onChange={(e) => setpassword(e.target.value)} onKeyDown={handleKeyDown} ref={passwordRef}/>
   
   {errorMessage && <p className="alert alert-danger">{errorMessage}</p>}
   
   <button type="submit" className=" mt-3 btn btn-primary cover-button">Login</button>
   
</form>

</div>

</section>
</> 
  );
};

export default AdminLogin;
