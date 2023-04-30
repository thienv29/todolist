import React from "react";
import InputBase from '@mui/material/InputBase';

export default function TodoEditing({ Todo, bool }) {
    return (
        <div>
            {bool ? (
                <div>
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder={Todo.Subject}
                        inputProps={{ "aria-label": {Todo.Subject} }}
                    />
                </div>
            ) : (
                <span>{Todo.Subject}</span>
            )}
        </div>
    );
}
