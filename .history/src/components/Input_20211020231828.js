import React from "react";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import Button from '@mui/material/Button';
export default function Input() {
    return (
        <div className="inputTodo">
            <TextField required id="outlined-required" label="Input your subject" endIcon={<SendIcon />} />
            <Button variant="contained" endIcon={<SendIcon />}>
                Send
            </Button>
        </div>
    );
}
