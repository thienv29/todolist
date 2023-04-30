import React, { useState, useEffect } from "react";
import Checkbox from "@mui/material/Checkbox";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';

export default function Todo({ Todo, handle }) {
    const [checkBox, setCheckBox] = useState(Todo.isComplete);
    const handleOnchange = () => {
        setCheckBox(!checkBox);
    };
    const handleDeleteElement = () => {};
    useEffect(() => {
        handle(Todo.id, checkBox);
    });
    const date2 = new Date();
    const date1 = new Date(Todo.time);
    console.log(date1);
    console.log(date2);
    const Difference_In_Time = date1.getTime() - date2.getTime();
    const Difference_In_Days = Math.floor(Difference_In_Time / (1000 * 3600 * 24));
    const checkDays = () => {};
    return (
        <div className="todo">
            <div className="tododivleft">
                <Checkbox
                    className="checkbox"
                    onChange={handleOnchange}
                    checked={checkBox}
                />
                <div style={checkBox ? { textDecoration: "line-through" } : {}}>
                    {Todo.Subject}
                </div>
            </div>
            <div className="tododivright">
                <div>{Difference_In_Days} days</div>
                <div className="todoEdit">
                    <IconButton aria-label='Delete' >
                      <EditIcon color='error' />
                    </IconButton>
                </div>
                <div className="todoDelete">
                    <IconButton aria-label='Delete' >
                      <DeleteOutlineIcon color='error' />
                    </IconButton>
                </div>
            </div>
        </div>
    );
}
