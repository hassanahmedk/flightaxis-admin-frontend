import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { deleteFlight } from "../../assets/api/flights";
import { deleteBooking } from "../../assets/api/bookings";
import { deleteQuote } from "../../assets/api/quotes";
import { deleteMessage } from "../../assets/api/messages";
import { deletePackageBooking } from "../../assets/api/packageBookings";

export default function ConfirmDelete(props) {
    
  const handleDelete = () => {
    if(props.whatToDelete === "flight"){
      deleteFlight(props._id)
        .then((data) => {
          alert("deleted flight");
          props.handleClose();
          window.location.reload()
        })
        .catch((error) => alert("an error occured!"));
    } else if(props.whatToDelete === "booking"){
      deleteBooking(props._id)
      .then((data) => {
        alert("deleted booking");
          props.handleClose();
          window.location.reload()
        })
        .catch((error) => alert("an error occured!"));
      } else if(props.whatToDelete === "quote"){
        deleteQuote(props._id)
        .then((data) => {
          alert("deleted quote");
          props.handleClose();
          window.location.reload()
        })
        .catch((error) => alert("an error occured!"));
      } else if(props.whatToDelete === "message"){
        console.log(props.whatToDelete);
        deleteMessage(props._id)
        .then((data) => {
          alert("deleted quote");
          props.handleClose();
          window.location.reload()
        })
        .catch((error) => alert("an error occured!"));
    } else if(props.whatToDelete === "packageBooking"){
        console.log(props.whatToDelete);
        deletePackageBooking(props._id)
        .then((data) => {
          alert("Deleted Package Booking");
          props.handleClose();
          window.location.reload()
        })
        .catch((error) => alert("an error occured!"));
    }
  };
  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle sx={{fontSize:"1.5rem"}} id="alert-dialog-title">{`Confirm Delete?`}</DialogTitle>
        <DialogContent>Are you sure you want to delete this {props.whatToDelete}?</DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose}>No</Button>
          <Button onClick={handleDelete} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
