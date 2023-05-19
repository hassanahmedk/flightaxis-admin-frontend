import React, { useState } from "react";

import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";
import { deleteFlight } from "../../assets/api/flights";
import EditFlight from "./EditFlight";
import ConfirmDelete from "./ConfirmDelete"


function Message(props) {
  const [confirmDeleteDialog, setConfirmDeleteDialog] = useState(false);

  return (
    <div className="box">
<ConfirmDelete
        open={confirmDeleteDialog}
        handleClose={() => setConfirmDeleteDialog(false)}
        _id={props._id}
        whatToDelete = {props.whatToDelete}
      />
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
        <DeleteIcon  onClick={()=>{setConfirmDeleteDialog(true)
        }} />
      </div>
    </div>
  );
}

export default Message;
