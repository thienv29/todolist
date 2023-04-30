import React, { useState } from 'react'
import Checkbox from '@mui/material/Checkbox';

export default function Todo({Todo , handle}) {
    console.log(Todo);
    const [checkBox, setCheckBox] = useState(true)
    const handleOnchange = () => {
      setCheckBox(!checkBox)
      handle()
    }
    return (
        <div className='todo'>
            <Checkbox onChange={handleOnchange} checked={checkBox} />

        </div>
    )
}
