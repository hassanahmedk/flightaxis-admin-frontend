import React, { useState } from "react";

import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";
import EditFlight from "./EditFlight";
import ConfirmDelete from "./ConfirmDelete";

function Flight(props) {
  const [editFlightDialog, setEditFlightDialog] = useState(false);

  const [confirmDeleteDialog, setConfirmDeleteDialog] = useState(false);

  
  return (
    <div className="box">
      <ConfirmDelete
        open={confirmDeleteDialog}
        handleClose={() => setConfirmDeleteDialog(false)}
        _id={props._id}
      />
      <EditFlight
        open={editFlightDialog}
        handleClose={() => setEditFlightDialog(false)}
        data={props}
      />
      <div className="box-atts">
        <h3 className="flight-heading box-heading">Flight</h3>
        <div className="airline">
          <span>Airline: </span> {props.airline}
        </div>
        <div className="leaving_from">
          <span>Leaving from: </span> {props.leaving_from}
        </div>
        <div className="going_to">
          <span>Going to: </span> {props.going_to}
        </div>
        <h3 className="fares-heading box-heading">Fares (Leaving)</h3>
        {props.months_fare.map((month) => {
          return (
            <div className="kids_fare">
              <span>{month.month}: </span> {month.leaving_fare}
            </div>
          );
        })}
        <h3 className="fares-heading box-heading">Fares (Returning)</h3>
        {props.months_fare.map((month) => {
          return (
            <div className="kids_fare">
              <span>{month.month}: </span> {month.returning_fare}
            </div>
          );
        })}
      </div>
      <div className="box-actions">
        <CreateIcon onClick={() => setEditFlightDialog(true)} />
        <DeleteIcon onClick={()=>{setConfirmDeleteDialog(true)
        }} />
      </div>
    </div>
  );
}

export default Flight;
