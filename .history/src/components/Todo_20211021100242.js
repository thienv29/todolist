import React, { useState,useEffect } from 'react'
import Checkbox from '@mui/material/Checkbox';
import styled, { css } from "styled-components";
const CheckStyle = styled(Checkbox)`
${(p) =>
    p.isCompleted &&
    css`
        text-decoration: line-through;
    `}
`;
export default function Todo({Todo , handle}) {
    const [checkBox, setCheckBox] = useState(false)
    const handleOnchange = () => {
      setCheckBox(!checkBox)
      
    }
    useEffect(() => {
      handle(Todo.id, checkBox);
        
    },)
    return (
        <div className='todo'>
            <CheckStyle isCompleted={Todo.isCompleted} className='checkbox' onChange={handleOnchange} checked={checkBox} />
            <div>
                {Todo.Subject}
            </div>
        </div>
    )
}
