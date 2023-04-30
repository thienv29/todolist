import React, { useState,useEffect } from 'react'
import Checkbox from '@mui/material/Checkbox';
import styled, { css } from "styled-components";

export default function Todo({Todo , handle}) {
    const [checkBox, setCheckBox] = useState(Todo.isComplete)
    const handleOnchange = () => {
      setCheckBox(!checkBox)
      
    }
    const style = {
        
    }
    useEffect(() => {
      handle(Todo.id, checkBox);
        
    },)
    return (
        <div className='todo'>
            <CheckStyle iscompleted={Todo.isComplete.toString()} className='checkbox' onChange={handleOnchange} checked={checkBox} />
            <div>
                {Todo.Subject}
            </div>
        </div>
    )
}
