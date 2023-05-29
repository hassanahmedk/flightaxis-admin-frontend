import React from "react";
import { Link, useLocation } from "react-router-dom";

import "../assets/css/navigation.css";
import logo from "../assets/images/logo.png";

import FlightIcon from '@mui/icons-material/Flight';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import EmailIcon from '@mui/icons-material/Email';
import { Button } from "@mui/material";

function Navigation(props) {
  const location = useLocation().pathname;

  const handleLogout = () => {
    localStorage.removeItem('token');
    props.setLoggedIn(false);
  };


  return (
    <div id="navigation">
      <img className="logo" src={logo} alt="logo" />
      <nav>
        <Link style={{
          backgroundColor: location==="/flights" && "#17A5F7", 
          color: location==="/flights" && "#ffffff", 
        }} className="nav-link" to="/flights">
        <FlightIcon /> Flights
        </Link>
        <Link style={{
          backgroundColor: location==="/bookings" && "#17A5F7", 
          color: location==="/bookings" && "#ffffff", 
        }} className="nav-link" to="/bookings">
         <BeenhereIcon /> Bookings
        </Link>
        <Link style={{
          backgroundColor: location==="/quotes" && "#17A5F7", 
          color: location==="/quotes" && "#ffffff", 
        }} className="nav-link" to="/quotes">
        <FindInPageIcon />  Quotes
        </Link>
        <Link style={{
          backgroundColor: location==="/messages" && "#17A5F7", 
          color: location==="/messages" && "#ffffff", 
        }} className="nav-link" to="/messages">
          <EmailIcon /> Messages
        </Link>
        <Link style={{
          backgroundColor: location==="/packages" && "#17A5F7", 
          color: location==="/packages" && "#ffffff", 
        }} className="nav-link" to="/packages">
          <EmailIcon /> Packages
        </Link>
      </nav>
      <Button onClick={handleLogout} sx={{margin:"auto 0 2rem 0"}}>Logout</Button>
    </div>
  );
}

export default Navigation;
