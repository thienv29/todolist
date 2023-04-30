import React from "react";
import DateTimePicker from "@mui/lab/DateTimePicker";
export default function Input() {
    const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleChange = (newValue) => {
    setValue(newValue);
  };
    return (
        <div className="inputTodo">
            <input type="text" className="input" placeholder="Input your subject" />
            <DateTimePicker
                label="DateTime picker"
                value={value}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
            />
        </div>
    );
}
