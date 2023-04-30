import React from "react";
import DateTimePicker from '@mui/lab/DateTimePicker';
export default function Input() {
    return (
        <div className="inputTodo">
           <input type='text' className='input' placeholder='Input your subject' />
           <DateTimePicker
          label="Date&Time picker"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
        </div>
    );
}
