import React from 'react'
import Checkbox from '@mui/material/Checkbox';

export default function Todo(props) {
    console.log(props.Todo);
    
    return (
        <div className='todo'>
            <Checkbox onChange={()=> props.handle}  />

        </div>
    )
}
