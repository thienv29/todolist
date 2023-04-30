import React, { useState } from 'react'
import Checkbox from '@mui/material/Checkbox';

export default function Todo({Todo , handle}) {
    console.log(Todo);
    use
    return (
        <div className='todo'>
            <Checkbox onChange={() => handle(Todo.id)} value={} />

        </div>
    )
}
