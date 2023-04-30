import React from "react";
import InputBase from "@mui/material/InputBase";
import Button from '@mui/material/Button';
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
                   <DoneIcon color='success' />}>
                    </Button>
                </div>
            ) : (
                <span>{Todo.Subject}</span>
            )}
        </div>
    );
}
