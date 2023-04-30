import React, { useEffect } from "react";
import DateTimePicker from "@mui/lab/DateTimePicker";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
export default function Input() {
    const [TimeValue, setTimeValue] = React.useState(new Date());
    const weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
    const handleChangeDateTime = (newValue) => {
        setTimeValue(newValue);
    };
    useEffect(() => {
        console.log(TimeValue.getDay());
        
    }, [])
    return (
        <Grid className="inputTodo" >
            <Grid item xs={6}>
                <input type="text" className="input" placeholder="Input your subject" />
            </Grid>
            <Grid item xs={5}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DateTimePicker
                        className="inputTime"
                        label="DateTime picker"
                        value={TimeValue}
                        onChange={handleChangeDateTime}
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
