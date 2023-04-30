import React, { useState,useEffect } from 'react'
import Checkbox from '@mui/material/Checkbox';

export default function Todo({Todo , handle}) {
    const [checkBox, setCheckBox] = useState(Todo.isComplete)
    const handleOnchange = () => {
      setCheckBox(!checkBox)
    }
    const handleDeleteElement = () => {
      
    }
    useEffect(() => {
      handle(Todo.id, checkBox);
        
    },)
    const date2 = new Date();
    const date1 = Todo.time;
    var Difference_In_Time = date2.getTime() - date1.getTime();
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    return (
        <div className='todo'>
            <Checkbox  className='checkbox' onChange={handleOnchange} checked={checkBox} />
            <div style={checkBox ? {textDecoration:'line-through'}:{}}>
                {Todo.Subject+' '+Difference_In_Days}
            </div>
        </div>
    )
}
