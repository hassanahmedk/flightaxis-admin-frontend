import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import AutocompleteAirports from "./AutocompleteAirports";
import { addPackage, editPackage } from "../../assets/api/packages";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function EditPackage(props) {
  const [formData, setFormData] = React.useState(props.data);

  const handleFormChange = (event) => {
    let { name, value } = event.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleAirportValue = (name, value) => {
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };



  const handleSubmit = () => {
    editPackage(formData._id, formData)
      .then((data) => {
        //setFormData({});
        alert("Package edited")
        props.editPackageArray(formData._id, formData.total_fare);
        setFormData({})
      })
      .catch((error) => 
      
      {alert("An error occured, please try again!")
        console.log(error);
        console.log(formData);
    }
      
      );

    // props.updateArray(formData);
    props.handleClose();
  };



  return (
    <div>
      <BootstrapDialog
        onClose={props.handleClose}
        aria-labelledby="customized-dialog-title"
        open={props.open}
        fullWidth={true}
        PaperProps={{width:"3rem", padding:"2rem"}}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={props.handleClose}
        >
          Add Package
        </BootstrapDialogTitle>
        <DialogContent
          dividers
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            padding: "4rem 2rem",
          }}
        >
           <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Airline</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="airline"
              value={formData.airline}
              label="Airline"
              onChange={handleFormChange}
            >
              <MenuItem value={"Air France"}>Air France</MenuItem>
              <MenuItem value={"KLM"}>KLM</MenuItem>
              <MenuItem value={"British Airways"}>British Airways</MenuItem>
              <MenuItem value={"Lufthansa Airways"}>Lufthansa</MenuItem>
              <MenuItem value={"Qatar Airways"}>Qatar Airways</MenuItem>
              <MenuItem value={"Virgin Atlantic Airways"}>Virgin Atlantic Airways</MenuItem>
              <MenuItem value={"Royal Air Maroc"}>Royal Air Maroc</MenuItem>
            </Select>
          </FormControl>
          <AutocompleteAirports
            name="leaving_from"
            value={formData.leaving_from}
            id="outlined-basic"
            label="Leaving from"
            variant="outlined"
            setValue={handleAirportValue}
            onChange={handleFormChange}
            initialValue={formData.leaving_from}
          />
          <AutocompleteAirports
            name="going_to"
            value={formData.going_to}
            id="outlined-basic"
            label="Going to"
            variant="outlined"
            setValue={handleAirportValue}
            onChange={handleFormChange}
            initialValue={formData.going_to}
          />

         
            <div className="fare-input"> 
            <TextField
                name={"total_fare"}
                value={formData.total_fare}
                type="Number"
                label={`Total Fare`}
                variant="outlined"
                onChange={handleFormChange}
            />
            </div>
           
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleSubmit}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
