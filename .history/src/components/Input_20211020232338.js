import React from "react";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import Button from '@mui/material/Button';
export default function Input() {
    return (
        <div className="inputTodo">
             <TextField
    id="standard-name"
    label="Name"
    value="hello"
    InputProps={{endAdornment: <YOUR_COPY_ICON_BUTTON />}}
  />
            
        </div>
    );
}
