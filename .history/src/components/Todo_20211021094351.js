import React, { useState,useEffect } from 'react'
import Checkbox from '@mui/material/Checkbox';

export default function Todo({Todo , handle}) {
    const [checkBox, setCheckBox] = useState(false)
    const handleOnchange = () => {
      setCheckBox(!checkBox)
      
    }
    useEffect(() => {
        console.log(checkBox);
      handle(Todo.id, checkBox);
        
    },)
    return (
        <div className='todo'>
            <Checkbox onChange={handleOnchange} checked={checkBox} />
            <div>
                
            </div>
        </div>
    )
}
