import React from "react";
import InputBase from "@mui/material/InputBase";
import IconButton from '@mui/material/IconButton';
import DoneIcon from '@mui/icons-material/Done';
import { useDispatch } from "react-redux";
import { editElement } from "../redux/actions";

export default function TodoEditing({ Todo, bool, setEditing }) {
    const handleEdit = () => {
        setEditing(false);
        dispatch(editElement({
            {...Todo,Subject=}
        }))
    }
    const dispatch = useDispatch()
    const keyEnter= (e) => {
      if (e.keyCode===13) {
        handleEdit()
      }
    }
    return (
        <div>
            {bool ? (
                <div>
                    <InputBase
                        inputProps={{ "aria-label": Todo.Subject }}
                        defaultValue={Todo.Subject}
                        autoFocus
                        onKeyDown={keyEnter}
                    />
                    <IconButton  sx={{ p: "10px" }} aria-label="search" >
                        <DoneIcon color='success'/>
                    </IconButton>
                </div>
            ) : (
                <span>{Todo.Subject}</span>
            )}
        </div>
    );
}
