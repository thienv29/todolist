import React, { useState } from "react";
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
    const handleCheckBox = (e) => {
      log
    }
    return (
        <div>
            {ListTodo.map((TodoChild) => {
                return <Todo Todo={TodoChild} />;
            })}
        </div>
    );
}
