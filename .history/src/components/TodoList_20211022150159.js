import React, {  useEffect } from "react";
import Todo from "./Todo.js";
import {  useSelector } from "react-redux";
import { useCallback } from "react";
import _ from "underscore";
export default function TodoList() {
    const ListTodo = useSelector((state) => state.listTodo, _.isEqual);
    
    const saveList = useCallback(
        localStorage.setItem('listTodo',JSON.stringify(ListTodo))
    )
    const dispatch = useDispatch()
    useEffect(() => {
        console.log(ListTodo);
        dispa
    }, [ListTodo]);

    return (
        <div className='todolist'>
            {ListTodo.map((TodoChild) => {
                return (
                    <Todo key={TodoChild.id} Todo={TodoChild} saveList={saveList} />
                );
            })}
        </div>
    );
}
