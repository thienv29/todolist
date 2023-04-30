import React from 'react'
import Checkbox from '@mui/material/Checkbox';

export default function Todo({todo , handl}) {
    console.log(props.Todo);
    
    return (
        <div className='todo'>
            <Checkbox onChange={(props.Todo.id) => props.handle}  />

        </div>
    )
}
