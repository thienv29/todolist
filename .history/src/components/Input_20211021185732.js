import React, { useEffect } from "react";
import DateTimePicker from "@mui/lab/DateTimePicker";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useDispatch } from "react-redux";
import { addElement } from "../redux/actions";
export default function Input() {
    const [valueNote, setValueNote] = React.useState({
        time:new Date(),
        note:''
    });
    const dispatch = useDispatch()
    const handleChangeDateTime = (time) => {
        setValueNote({...valueNote,time:time});
    };
    const handleAddNote = () => {
        
    }
    
    return (
        <Grid className="inputTodo">
            <Grid item xs={6}>
                <input type="text" value={valueNote} className="input" placeholder="Input your subject" />
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
                <Button onClick={handleAddNote} variant="contained" endIcon={<SendIcon />}></Button>
            </Grid>
        </Grid>
    );
}
