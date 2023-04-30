import React, { useState, useEffect } from "react";
import Checkbox from "@mui/material/Checkbox";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch } from "react-redux";
import { deleteElement,saveList,setComplete } from "../redux/actions";
import TodoEditing from "./TodoEditing";
import Divider from '@mui/material/Divider';

export default function Todo({ Todo }) {
    const [checkBox, setCheckBox] = useState(Todo.isComplete);
    const [ClassAction, setClassAction] = useState('todo')
    const [Editing, setEditing] = useState(false)
    const handleOnchange = () => {
        setCheckBox(!checkBox);
    };
    const dispatch = useDispatch()
    const handleDeleteElement = () => {
      setClassAction('todo removed-item')
        setTimeout(() => {
          dispatch(deleteElement(Todo.id))
        }, 1000);
    };
    useEffect(() => {
        dispatch(setComplete(Todo.id, checkBox));
        dispatch(saveList())
    });
    useEffect(() => {
        dispatch(setComplete(Todo.id, checkBox));
        dispatch(saveList())
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
                    
                    <TodoEditing Todo={Todo} bool={Editing} setEditing={setEditing}/>
                </div>
            </div>
            <div className="tododivright">
                <div style={{marginRight: '10px'}}>{Todo.remainingDays} days</div>
                <div className="todoEdit">
                    <IconButton aria-label='Edit' onClick={() => {
                      setEditing(!Editing)
                    }}  >
                      <EditIcon color='success' />
                    </IconButton>
                </div>
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <div className="todoDelete">
                    <IconButton onClick={handleDeleteElement} aria-label='Delete' >
                      <DeleteOutlineIcon color='error' />
                    </IconButton>
                </div>
            </div>
        </div>
    );
}
