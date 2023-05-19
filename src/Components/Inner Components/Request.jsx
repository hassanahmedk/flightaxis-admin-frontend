import React, { useState } from "react";

import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";
import { deleteFlight } from "../../assets/api/flights";
import EditFlight from "./EditFlight";
import ConfirmDelete from "./ConfirmDelete";

function Request(props) {
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
        <h4 className="flight-heading box-heading">
            {props.label}
        </h4>
        <div className="airline">
          <span>Airline: </span> {props.airline}
        </div>
        <div className="leaving_from">
          <span>Leaving from: </span> {props.leaving_from}
        </div>
        <div className="going_to">
          <span>Going to: </span> {props.going_to}
        </div>
        <div className="trip_type">
          <span>Trip type: </span> {props.trip_type}
        </div>
        <div className="departing_on">
          <span>Departing on: </span> {props.departing_on}
        </div>
        {
        props.trip_type==="Return" && 
        <div className="returning_on">
          <span>Returning on: </span> {props.returning_on}
        </div>
        }
        <div className="no_of_passengers">
          <span>No of passengers: </span> {props.no_of_passengers}
        </div>
        <div className="adults">
          <span>Adults: </span> {props.adults}
        </div>
        <div className="kids">
          <span>Kids: </span> {props.kids}
        </div>
        <div className="infants">
          <span>Infants: </span> {props.infants}
        </div>
        <h4 className="contact-heading box-heading">
            Customer Contact
        </h4>
        <div className="customer_email">
          <span>Customer Email: </span> {props.customer_email}
        </div>
        <div className="customer_phone">
          <span>Customer Phone: </span> {props.customer_phone}
        </div>
        <h4 className="fare-heading box-heading">
            Fare
        </h4>
        <div className="total_fare">
          {props.total_fare}
        </div>


        <h4 className="side_notes-heading box-heading">
            Side Notes
        </h4>
        <div className="side_notes">
          {props.side_notes ? props.side_notes : "No side notes added"}
        </div>

      </div>
      <div className="box-actions">
        <DeleteIcon  onClick={()=>{setConfirmDeleteDialog(true)
        }} />
      </div>
    </div>
  );
}

export default Request;
