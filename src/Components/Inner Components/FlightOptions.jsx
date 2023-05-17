import { Button } from "@mui/material";
import React from "react";

function FlightOptions(props) {
  return (
    <div className="flight-options">
      <Button variant={props.flightsCity==="LHR" ? "contained": "outlined"}onClick={()=>{
        props.setFlightsCity("LHR")
      }} className="flights-option">London Flights</Button>
      <Button variant={props.flightsCity==="MAN" ? "contained" : "outlined"}onClick={()=>{
        props.setFlightsCity("MAN")
      }} className="flights-option">Manchester Flights</Button>
      <Button variant={props.flightsCity==="BHX" ? "contained" : "outlined"}onClick={()=>{
        props.setFlightsCity("BHX")
      }} className="flights-option">Berminghim Flights</Button>
    </div>
  );
}

export default FlightOptions;
