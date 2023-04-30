import React from "react";
import DateTimePicker from "@mui/lab/DateTimePicker";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
export default function Input() {
    const [value, setValue] = React.useState(new Date("2014-08-18T21:11:54"));

    const handleChange = (newValue) => {
        setValue(newValue);
    };
    return (
        <Grid className="inputTodo" spacing={2}>
            <Grid item xs={6}>
                <input type="text" className="input" placeholder="Input your subject" />
            </Grid>
            <Grid item xs={4}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DateTimePicker
                        className="inputTime"
                        label="DateTime picker"
                        value={value}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
            </Grid>
            <Grid item xs={1}>
                <Button variant="contained" endIcon={<SendIcon />}>
                </Button>
            </Grid>
        </Grid>
    );
}
