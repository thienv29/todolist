import React, { useState,useCallback } from "react";
import Todo from "./Todo.js";
export default function TodoList() {
    const [ListTodo, setListTodo] = useState([
        {
            id:1,
            Subject: "TKGD",
            Time: "123",
            isComplete:false,
        },
        {
            id:2,
            Subject: "Toan",
            Time: "123",
            isComplete:false,
        },
    ]);
    const handleCheckBox = useCallback((id) => {
        let tmp = ListTodo
        tmp.forEach(element => {
            if (element.id==id) {
                element.isComplete = true
            }
        });
      setListTodo(tmp)
      console.log()
    })
    return (
        <div>
            {ListTodo.map((TodoChild) => {
                return <Todo key={TodoChild.id} Todo={TodoChild} handle={handleCheckBox} />;
            })}
        </div>
    );
}
