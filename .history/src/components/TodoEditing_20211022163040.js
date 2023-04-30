import React from "react";
import InputBase from "@mui/material/InputBase";
import IconButton from '@mui/material/IconButton';
import DoneIcon from '@mui/icons-material/Done';

export default function TodoEditing({ Todo, bool }) {
    const keyEnter= (e) => {
      console.log(e.keyCode);
      
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
