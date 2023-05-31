import { Button } from "@mui/material";
import React from "react";

function PackageOptions(props) {
  return (
    <div className="flight-options">
      <Button variant={props.packagesCity==="Birmingham" ? "contained": "outlined"}onClick={()=>{
        props.setPackagesCity("Birmingham")
      }} className="flights-option">Birmingham</Button>
      <Button variant={props.packagesCity==="Edinburgh" ? "contained" : "outlined"}onClick={()=>{
        props.setPackagesCity("Edinburgh")
      }} className="flights-option">Edinburgh</Button>
      <Button variant={props.packagesCity==="Glasgow" ? "contained" : "outlined"}onClick={()=>{
        props.setPackagesCity("Glasgow")
      }} className="flights-option">Glasgow</Button>
      <Button variant={props.packagesCity==="London Gatwick" ? "contained" : "outlined"}onClick={()=>{
        props.setPackagesCity("London Gatwick")
      }} className="flights-option">London Gatwick </Button>
      <Button variant={props.packagesCity==="London Heathrow" ? "contained" : "outlined"}onClick={()=>{
        props.setPackagesCity("London Heathrow")
      }} className="flights-option">London Heathrow</Button>
      <Button variant={props.packagesCity==="Manchester" ? "contained" : "outlined"}onClick={()=>{
        props.setPackagesCity("Manchester")
      }} className="flights-option">Manchester</Button>
      <Button variant={props.packagesCity==="Newcastle" ? "contained" : "outlined"}onClick={()=>{
        props.setPackagesCity("Newcastle")
      }} className="flights-option">Newcastle</Button>
    </div>
  );
}

export default PackageOptions;
