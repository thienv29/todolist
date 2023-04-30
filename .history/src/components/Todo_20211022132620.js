import React, { useState, useEffect } from "react";
import Checkbox from "@mui/material/Checkbox";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch } from "react-redux";
import { deleteElement } from "../redux/actions";

export default function Todo({ Todo }) {
    console.log('rerender todo');
    const [checkBox, setCheckBox] = useState(Todo.isComplete);
    const handleOnchange = () => {
        setCheckBox(!checkBox);
    };
    const [ClassAction, setClassAction] = useState('todo')
    const dispatch = useDispatch()
    const handleDeleteElement = () => {
      setClassAction('todo removed-item')
        setTimeout(() => {
          dispatch(deleteElement(Todo.id))
        }, 1000);
    };
    useEffect(() => {
            dispatch(setComplete(id, checkbox));
    });
    
    return (
        <div className={ClassAction}>
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
                <div>{Todo.remainingDays} days</div>
                <div className="todoEdit">
                    <IconButton aria-label='Edit'  >
                      <EditIcon color='success' />
                    </IconButton>
                </div>
                <div className="todoDelete">
                    <IconButton onClick={handleDeleteElement} aria-label='Delete' >
                      <DeleteOutlineIcon color='error' />
                    </IconButton>
                </div>
            </div>
        </div>
    );
}
