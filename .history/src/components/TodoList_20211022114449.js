import React, { useCallback, useEffect } from "react";
import { setComplete } from "../redux/actions/index.js";
import Todo from "./Todo.js";
import { useDispatch, useSelector } from "react-redux";
import _ from "underscore";
export default function TodoList() {
    const ListTodo = useSelector((state) => state.listTodo, _.isEqual);
    const dispatch = useDispatch();
    const handleCheckBox = useCallback((id, checkbox) => {
        dispatch(setComplete(id, checkbox));
    },[ListTodo]);
    
    useEffect(() => {
        console.log(ListTodo);
        localStorage.setItem('listTodo',JSON.stringify(ListTodo))
    }, [ListTodo]);

    return (
        <div className='todolist'>
            {ListTodo.map((TodoChild) => {
                console.log(TodoChild.id);
                return (
                    <Todo key={TodoChild.id} Todo={TodoChild} handle={handleCheckBox} />
                );
            })}
        </div>
    );
}
