import React, { useState, useCallback } from "react";
import { setComplete } from "../redux/actions/index.js";
import Todo from "./Todo.js";
import { useDispatch, useSelector } from "react-redux";
export default function TodoList() {
    const ListTodo = useSelector((state) => state.listTodo);
    console.log(ListTodo);
    const dispatch = useDispatch();
    const handleCheckBox = useCallback((id, checkbox) => {
        dispatch(setComplete(id, checkbox));
        console.log(ListTodo);
    });
    useEffect(() => {
        
        return () => {
            
        }
    }, [])
    return (
        <div>
            {ListTodo.map((TodoChild) => {
                return (
                    <Todo key={TodoChild.id} Todo={TodoChild} handle={handleCheckBox} />
                );
            })}
        </div>
    );
}
