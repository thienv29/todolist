import React, { useState,useEffect } from 'react'
import Checkbox from '@mui/material/Checkbox';
import styled, { css } from "styled-components";
const CheckStyle = styled(Checkbox)`
${(p) =>
    p.iscompleted &&
    css`
        text-decoration: line-through;
    `}
`;
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
            <Checkbox iscompleted={Todo.isComplete.toString()} className='checkbox' onChange={handleOnchange} checked={checkBox} />
            <div>
                {Todo.Subject}
            </div>
        </div>
    )
}
