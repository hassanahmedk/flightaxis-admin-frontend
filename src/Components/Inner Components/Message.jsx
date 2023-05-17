import React, { useState } from "react";

import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";
import { deleteFlight } from "../../assets/api/flights";
import EditFlight from "./EditFlight";

function Message(props) {

  const handleDelete = () => {
    deleteFlight(props._id)
      .then((data) => alert("deleted flight"))
      .catch((error) => alert("an error occured!"));
  };
  return (
    <div className="box">

      <div className="box-atts">
        <h3 className="flight-heading box-heading">
            Customer Info
        </h3>
        <div className="name">
          <span>Name: </span> {props.name}
        </div>
        <div className="email">
          <span>Email: </span> {props.email}
        </div>
        <div className="phone">
          <span>Phone: </span> {props.phone}
        </div>
        <div className="date">
          <span>Date: </span> {props.date}
        </div>
        <h3 className="fares-heading box-heading">
            Message
        </h3>
        <div className="message">
          {props.message}
        </div>
        

      </div>
      <div className="box-actions">
        <DeleteIcon onclick={handleDelete} />
      </div>
    </div>
  );
}

export default Message;
