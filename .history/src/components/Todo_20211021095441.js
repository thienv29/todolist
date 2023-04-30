import React, { useState,useEffect } from 'react'
import Checkbox from '@mui/material/Checkbox';
import styled, { css } from "styled-components";
const ButtonStyle = styled(Button)`
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
                {Todo.Subject}
            </div>
        </div>
    )
}
