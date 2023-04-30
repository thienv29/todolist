import React from "react";
import DateTimePicker from "@mui/lab/DateTimePicker";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useDispatch } from "react-redux";
import { addElement } from "../redux/actions";
import toast from "react-hot-toast";

export default function Input() {
    const [valueNote, setValueNote] = React.useState({
        time: "",
        note: "",
    });
    const dispatch = useDispatch();

    const handleAddNote = () => {
        if (valueNote.note === "") {
            toast.error('Vui lòng nhập thông tin ! ')
        } else {
            dispatch(addElement(valueNote));
            setValueNote({
                ...valueNote,
                note: "",
            });
        }
    };
 () => {
   
 }
    return (
        <Grid container className="inputTodo">
            <Grid item className="inputdiv" xs={6} sm={6}>
                <input
                    type="text"
                    value={valueNote.note}
                    onChange={(e) => {
                        setValueNote({ ...valueNote, note: e.target.value });
                    }}
                    className="input"
                    placeholder="Input your subject"
                />
            </Grid>
            <Grid item xs={4} sm={5}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DateTimePicker
                        className="inputTime"
                        label="Deadline"
                        value={valueNote.time}
                        onChange={(time) => {
                            setValueNote({ ...valueNote, time: time });
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
            </Grid>
            <Grid item xs={2} sm={1}>
                <Button
                    onClick={handleAddNote}
                    variant="contained"
                    endIcon={<SendIcon />}
                ></Button>
            </Grid>
        </Grid>
    );
}
