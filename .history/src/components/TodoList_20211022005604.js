import React, { useCallback, useEffect } from "react";
import { setComplete } from "../redux/actions/index.js";
import Todo from "./Todo.js";
import { useDispatch } from "react-redux";

export default function TodoList({ListTodo}) {
   
    const dispatch = useDispatch();
    const handleCheckBox = useCallback((id, checkbox) => {
        dispatch(setComplete(id, checkbox));
        console.log(ListTodo);
    },[ListTodo,dispatch]);
    useEffect(() => {
        console.log(ListTodo);
    }, [ListTodo]);

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
