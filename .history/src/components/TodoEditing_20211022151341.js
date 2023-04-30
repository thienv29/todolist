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
                    <Button variant="outlined" startIcon={<DeleteIcon />}>

                       
                    </Button>
                </div>
            ) : (
                <span>{Todo.Subject}</span>
            )}
        </div>
    );
}
