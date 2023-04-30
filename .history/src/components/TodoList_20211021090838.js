import React, { useState,useCallback } from "react";
import Todo from "./Todo.js";
export default function TodoList() {
    const [ListTodo, setListTodo] = useState([
        {
            Subject: "TKGD",
            Time: "123",
            isComplete:false,
        },
        {
            Subject: "Toan",
            Time: "123",
            isComplete:false,
        },
    ]);
    console.log(ListTodo);
    const handleCheckBox = useCallback((e) => {
      console.log('check');
    })
    return (
        <div>
            {ListTodo.map((TodoChild) => {
                return <Todo Todo={TodoChild} handle={handleCheckBox} />;
            })}
        </div>
    );
}
