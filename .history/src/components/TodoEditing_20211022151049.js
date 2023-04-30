import React from "react";
import InputBase from "@mui/material/InputBase";
import IconButton from '@mui/material/IconButton';
import DoneIcon from '@mui/icons-material/Done';

export default function TodoEditing({ Todo, bool }) {
    return (
        <div>
            {bool ? (
                <div>
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        inputProps={{ "aria-label": Todo.Subject }}
                        defaultValue={Todo.Subject}
                        autoFocus
                    />
                    <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
                        <DoneIcon/>
                    </IconButton>
                </div>
            ) : (
                <span>{Todo.Subject}</span>
            )}
        </div>
    );
}
