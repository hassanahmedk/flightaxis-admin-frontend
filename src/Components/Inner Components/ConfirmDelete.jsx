import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { deleteFlight } from "../../assets/api/flights";

export default function ConfirmDelete(props) {
    
  const handleDelete = () => {
    deleteFlight(props._id)
      .then((data) => {
        alert("deleted flight");
        props.handleClose();
      })
      .catch((error) => {
        alert("an error occured!");
        console.log(error);
    });
  };
  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirm Delete?"}</DialogTitle>
        <DialogContent></DialogContent>
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
