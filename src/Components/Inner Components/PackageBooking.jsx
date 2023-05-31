import React, { useState } from "react";

import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";
import { deleteFlight } from "../../assets/api/flights";
import EditFlight from "./EditFlight";
import ConfirmDelete from "./ConfirmDelete";

function PackageBooking(props) {
  const [confirmDeleteDialog, setConfirmDeleteDialog] = useState(false);

  return (
    <div className="box">
      <ConfirmDelete
        open={confirmDeleteDialog}
        handleClose={() => setConfirmDeleteDialog(false)}
        _id={props._id}
        whatToDelete={props.whatToDelete}
      />
      <div className="box-atts">
        <h4 className="flight-heading box-heading">{props.label}</h4>
        <div className="name">
          <span>Name: </span> {props.name}
        </div>
        <div className="customer_email">
          <span>Customer Email: </span> {props.customer_email}
        </div>
        <div className="customer_phone">
          <span>Customer Phone: </span> {props.customer_phone}
        </div>
        <div className="leaving_from">
          <span>Leaving from: </span> {props.leaving_from}
        </div>
        <div className="going_to">
          <span>Going to: </span> {props.going_to}
        </div>
        <div className="airline">
        <span>Airline: </span> {props.airline}
        </div>
        <div className="total_fare">
        <span>Fare: </span> {props.total_fare}
        </div>
       
        
      </div>
      <div className="box-actions">
        <DeleteIcon
          onClick={() => {
            setConfirmDeleteDialog(true);
          }}
        />
      </div>
    </div>
  );
}

export default PackageBooking;
