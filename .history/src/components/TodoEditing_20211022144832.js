import React from "react";
import InputBase from '@mui/material/InputBase';

export default function TodoEditing({ Todo, bool }) {
    return (
        <div>
            {bool ? (
                <div>
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        inputProps={{ "aria-label": Todo.Subject }}
                        defaultValue={Todo.Subject}
                        onFocus={true}
                    />
                </div>
            ) : (
                <span>{Todo.Subject}</span>
            )}
        </div>
    );
}
