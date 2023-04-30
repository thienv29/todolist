import React, { useState,useEffect } from 'react'
import Checkbox from '@mui/material/Checkbox';
import styled, { css } from "styled-components";
import { Grid } from '@mui/material';
const ButtonStyle = styled(Grid)`

`;
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
        <Grid className='todo'>
            <Checkbox className='' onChange={handleOnchange} checked={checkBox} />
            <div>
                {Todo.Subject}
            </div>
        </Grid>
    )
}
