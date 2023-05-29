import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Person2Icon from "@mui/icons-material/Person2";
import KeyIcon from "@mui/icons-material/Key";

import "../assets/css/login.css";
import logo from "../assets/images/logo.png";
import { Button } from "@mui/material";

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();


    try {
      // const response = await fetch('https://flightaxis.vercel.app/login', {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const { token } = await response.json();
        localStorage.setItem('token', token);
        console.log(response)
        props.setLoggedIn(true);
      } else {
        const errorData = await response.json();
        setError(errorData.message);
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };



  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
        props.setLoggedIn(true);
    } else {
        props.setLoggedIn(false);
    }
  }, []);

  return (
    <div id="login">
      <div className="login-left">
        <img className="login-logo" src={logo} alt="" />
      </div>
      <div className="login-right">
        <h2> Admin Panel</h2>
        <p className="login-error-msg">
          {error}
        </p>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <Person2Icon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            id="input-with-sx"
            label="Username"
            variant="standard"
            sx={{ width: "16rem" }}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <KeyIcon
            sx={{ color: "action.active", mr: 1, my: 0.5 }}
            
          />
          <TextField
            type="password"
            id="input-with-sx"
            label="Password"
            sx={{ width: "16rem" }}
            variant="standard"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Box>
        <Button sx={{marginTop:"1.5rem"}} variant="contained" onClick={handleLogin}> Login </Button>
      </div>
    </div>
  );
}

export default Login;
