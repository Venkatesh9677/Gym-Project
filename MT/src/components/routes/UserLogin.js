import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "./Layout";

const UserLogin = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  const checklogin = async (e) => {e.preventDefault();

    if (username.trim() === "" || password === ""){setErrorMessage("Please fill in both username and password."); 
    return;}

try {const response = await fetch("http://localhost:5000/checkLogin", {
        method: "POST",
        headers: {"Content-Type": "application/json",},
      body: JSON.stringify({ username, password }),});

if (response.ok) {const data = await response.json();
if (data.valid) {navigate(`/report`, {state: {msId: data.msId,firstName: data.firstName,lastName: data.lastName,},
  }
);
} 
      
else {setErrorMessage("Invalid username or password.");}}
  
else {setErrorMessage("An error occurred while trying to log in.");}} 

catch (error) {setErrorMessage("An error occurred while trying to log in.");}
  
};

const handleKeyDown = (e) => {if (e.key === "Enter") {e.preventDefault();

  if (e.target.name === "username") {passwordRef.current.focus();}
       
  else {checklogin(e);}}
  
};

  return (
    <>
<Layout />
<section className="container py-5 justify-content-center align-items-center vh-100"
style={{ maxWidth: "480px" }} id="login">
        
<div className="cover-card px-3 mt-3">
<h1 className="mb-1 text-center py-3">User Login</h1>

<form  className="cover-group" onSubmit={checklogin}>

<label className="cover-label">Username</label>
<input type="text" name="username" placeholder="Enter username" className="form-control" value={username}
onChange={(e) => setusername(e.target.value)} onKeyDown={handleKeyDown} />
            
<label className="cover-label">Password</label>
<input type="password" name="password"placeholder="Enter password" className="form-control" value={password} onChange={(e) => setpassword(e.target.value)} onKeyDown={handleKeyDown} ref={passwordRef}/>
{errorMessage && (<p className="alert alert-danger">{errorMessage}</p>)

}

<button type="submit" className=" mt-3 btn btn-primary cover-button">Login</button>
          
</form>
</div>
</section>

</>
  
);
};

export default UserLogin;
