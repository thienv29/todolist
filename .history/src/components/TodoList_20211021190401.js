import React, { useState,useCallback } from "react";
import { setComplete } from "../redux/actions/index.js";
import Todo from "./Todo.js";
import { useDispatch } from "react-redux";
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
    const dispatch = useDispatch()
    const handleCheckBox = useCallback((id,checkbox) => {
        dispatch(setComplete(id,))
      console.log(ListTodo)
    })
    return (
        <div>
            {ListTodo.map((TodoChild) => {
                return <Todo key={TodoChild.id} Todo={TodoChild} handle={handleCheckBox} />;
            })}
        </div>
    );
}
