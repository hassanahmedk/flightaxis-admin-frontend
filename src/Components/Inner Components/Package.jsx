import React, { useState } from "react";

import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";
import EditFlight from "./EditFlight";
import ConfirmDelete from "./ConfirmDelete";
import EditPackage from "./EditPackage";

function Flight(props) {
  const [editFlightDialog, setEditFlightDialog] = useState(false);

  const [confirmDeleteDialog, setConfirmDeleteDialog] = useState(false);

  
  return (
    <div className="box">
      {/* <ConfirmDelete
        open={confirmDeleteDialog}
        handleClose={() => setConfirmDeleteDialog(false)}
        _id={props._id}
        whatToDelete = "flight"
      /> */}
      <EditPackage
        open={editFlightDialog}
        handleClose={() => setEditFlightDialog(false)}
        data={props}
        editPackageArray = {props.editPackageArray}
      />
      <div className="box-atts">
        <h3 className="flight-heading box-heading">Package {props.packageNo}</h3>
        <div className="airline">
          <span>Airline: </span> {props.airline}
        </div>
        <div className="leaving_from">
          <span>Leaving from: </span> {props.leaving_from}
        </div>
        <div className="going_to">
          <span>Going to: </span> {props.going_to}
        </div>
        <div className="total_fare">
          <span>Total fare: </span> {props.total_fare}
        </div>
       
      </div>
      <div className="box-actions">
        <CreateIcon onClick={() => setEditFlightDialog(true)} />
        {/* <DeleteIcon onClick={()=>{setConfirmDeleteDialog(true)}} /> */}
      </div>
    </div>
  );
}

export default Flight;
