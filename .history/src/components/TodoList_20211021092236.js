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
        todo
      setListTodo((todoList) => {
        todoList.map((e) => {
          return e.id == id ? {...e,isComplete:true} : e
        })
      })
    })
    return (
        <div>
            {ListTodo.map((TodoChild) => {
                return <Todo key={TodoChild.id} Todo={TodoChild} handle={handleCheckBox} />;
            })}
        </div>
    );
}
