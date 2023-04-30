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
    const date1 = new Date(Todo.time);
    console.log(date1);
    console.log(date2);
    const Difference_In_Time = date1.getTime() - date2.getTime();
    const Difference_In_Days = Math.floor(Difference_In_Time / (1000 * 3600 * 24));
    const checkDays=() => {
      
    }
    return (
        <div className='todo'>
            <div>
            <Checkbox  className='checkbox' onChange={handleOnchange} checked={checkBox} />
            <div style={checkBox ? {textDecoration:'line-through'}:{}}>
                {Todo.Subject} {Difference_In_Days}
            </div>
            </div>
            <div className=''></div>
        </div>
    )
}
