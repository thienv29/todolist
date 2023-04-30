import React, { useState,useEffect } from 'react'
import Checkbox from '@mui/material/Checkbox';

export default function Todo({Todo , handle}) {
    const [checkBox, setCheckBox] = useState(Todo.isComplete)
    const handleOnchange = () => {
      setCheckBox(!checkBox)
    }
    useEffect(() => {
      handle(Todo.id, checkBox);
        
    },)
    return (
        <div className='todo'>
            <Checkbox iscompleted={Todo.isComplete.toString()} className='checkbox' onChange={handleOnchange} checked={checkBox} />
            <div>
                {Todo.Subject}
            </div>
        </div>
    )
}
