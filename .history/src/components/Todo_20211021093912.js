import React, { useState } from 'react'
import Checkbox from '@mui/material/Checkbox';

export default function Todo({Todo , handle}) {
    const [checkBox, setCheckBox] = useState(false)
    const handleOnchange = () => {
      setCheckBox(!checkBox)
      console.log(checkBox);
      handle(Todo.id, checkBox);
    }
    useEffect(() => {
        effect
        return () => {
            cleanup
        }
    }, [input])
    return (
        <div className='todo'>
            <Checkbox onChange={handleOnchange} checked={checkBox} />

        </div>
    )
}
