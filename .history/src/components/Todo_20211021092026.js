import React from 'react'
import Checkbox from '@mui/material/Checkbox';

export default function Todo({todo , handle}) {
    console.log(todo);
    
    return (
        <div className='todo'>
            <Checkbox onChange={() => handle()}  />

        </div>
    )
}
