import React from 'react'
import Checkbox from '@mui/material/Checkbox';

export default function Todo({Todo , handle}) {
    console.log(Todo);
    
    return (
        <div className='Todo'>
            <Checkbox onChange={() => handle(Todo.id)}  />

        </div>
    )
}
