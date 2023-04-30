import React, { useState, useCallback,useEffect } from "react";
import { setComplete } from "../redux/actions/index.js";
import Todo from "./Todo.js";
import { useDispatch, useSelector } from "react-redux";
import _ from 'underscore';

const contextData = useSelector(state => state.data, _.isEqual);

export default function TodoList() {
    const ListTodo = useSelector((state) => state.listTodo);
    const dispatch = useDispatch();
    const handleCheckBox = useCallback((id, checkbox) => {
        dispatch(setComplete(id, checkbox));
    });
    
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
