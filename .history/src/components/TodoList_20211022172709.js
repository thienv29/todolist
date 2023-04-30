import React, {  useEffect } from "react";
import Todo from "./Todo.js";
import {  useSelector } from "react-redux";
import _ from "underscore";
import { saveList } from "../redux/actions/index.js";
import { useDispatch } from "react-redux";
import { Grid } from "@mui/material";
export default function TodoList() {
    const ListTodo = useSelector((state) => state.listTodo, _.isEqual);
    const dispatch = useDispatch()
    useEffect(() => {
        console.log(ListTodo);
        dispatch(saveList())
    }, [ListTodo]);
    return (
        <Grid container className='todolist'>
            {ListTodo.map((TodoChild) => {
                return (
                    <Todo key={TodoChild.id} Todo={TodoChild}  />
                );
            })}
        </Grid >
    );
}
