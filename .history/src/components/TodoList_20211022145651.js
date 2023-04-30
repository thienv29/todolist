import React, {  useEffect } from "react";
import Todo from "./Todo.js";
import {  useSelector } from "react-redux";
import _ from "underscore";
export default function TodoList() {
    const ListTodo = useSelector((state) => state.listTodo, _.isEqual);
    
    const saveList = useCallback(
        localStorage.setItem('listTodo',JSON.stringify(ListTodo))
    )
    useEffect(() => {
        console.log(ListTodo);
        saveList();
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
