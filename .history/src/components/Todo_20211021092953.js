import React, { useState } from 'react'
import Checkbox from '@mui/material/Checkbox';

export default function Todo({Todo , handle}) {
    console.log(Todo);
    const [checkBox, setCheckBox] = useState(false)
    const handleOnchange = () => {
      
    }
    return (
        <div className='todo'>
            <Checkbox onChange={() => hang} value={checkBox} />

        </div>
    )
}
