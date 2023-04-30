import React, { useState,useEffect } from 'react'
import Checkbox from '@mui/material/Checkbox';

export default function Todo({Todo , handle}) {
    const [checkBox, setCheckBox] = useState(Todo.isComplete)
    const handleOnchange = () => {
      setCheckBox(!checkBox)
    }
    const handleDeleteElement
    useEffect(() => {
      handle(Todo.id, checkBox);
        
    },)
    return (
        <div className='todo'>
            <Checkbox  className='checkbox' onChange={handleOnchange} checked={checkBox} />
            <div style={checkBox ? {textDecoration:'line-through'}:{}}>
                {Todo.Subject}
            </div>
        </div>
    )
}
