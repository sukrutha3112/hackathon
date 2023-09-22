import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";

function UtilityForm({ open, handleClose }) {
  const [formData, setFormData] = useState({
    state: "",
    input: "",
    output: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    // You can handle form submission here
    console.log("Form Data:", formData);
    handleClose();
 
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Submit Form</DialogTitle>
      <DialogContent>
        <DialogContentText>Fill out the form below:</DialogContentText>
        <TextField
          margin="dense"
          id="email"
          name="state"
          label="State your use-case : "
          type="text"
          fullWidth
          value={formData.state}
          onChange={handleInputChange}
        />
        <TextField
          autoFocus
          margin="dense"
          id="name"
          name="input"
          label="Input you are intending to give :"
          type="text"
          fullWidth
          value={formData.input}
          onChange={handleInputChange}
        />
        <TextField
          margin="dense"
          id="email"
          name="output"
          label="Output that you want the utility to give : "
          type="text"
          fullWidth
          value={formData.output}
          onChange={handleInputChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default UtilityForm;