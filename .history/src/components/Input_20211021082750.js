import React from "react";
import DateTimePicker from "@mui/lab/DateTimePicker";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from '@mui/lab/LocalizationProvider';
export default function Input() {
    const [value, setValue] = React.useState(new Date("2014-08-18T21:11:54"));

    const handleChange = (newValue) => {
        setValue(newValue);
    };
    return (
        <div className="inputTodo">
            <input type="text" className="input" placeholder="Input your subject" />
            <div></div></div>
        </div>
    );
}
