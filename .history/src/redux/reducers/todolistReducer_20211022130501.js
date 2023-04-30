import React from "react";
import uuid from "react-uuid";
import toast from 'react-hot-toast';
export const initialState = JSON.parse(localStorage.getItem("listTodo") || "[]");
const TodoListReducer = (state = initialState, action) => {
    const tmp = [...state];
    switch (action.type) {
        case "SET_COMPLETE":
            tmp.forEach((e) => {
                if (e.id === action.data.id) {
                    e.isComplete = action.data.bool;
                }
            });
            return tmp;
        case "DELETE_ELEMENT":
            const removeIndex = tmp.findIndex((item) => item.id === action.data);
            tmp.splice(removeIndex, 1);
            return tmp;
        case "ADD_ELEMENT":
            console.log("add");
            const date2 = new Date();
            const date1 = new Date(action.data.time);
            const Difference_In_Time = date1.getTime() - date2.getTime();
            const Difference_In_Days = Math.floor(
                Difference_In_Time / (1000 * 3600 * 24)
            );
            if (Difference_In_Days>=) {
                
            }
            tmp.push({
                Subject: action.data.note,
                time: action.data.time,
                id: uuid(),
                isComplete: false,
                remainingDays:Difference_In_Days
            });

            return tmp;
        case "EDIT_ELEMENT":
            tmp.forEach((e) => {
                if (e.id === action.data.id) {
                    e.Subject = action.data.Subject;
                }
            });
            return tmp;
        case "RESET":
            return [];

        default:
            return state;
    }
};

export default TodoListReducer;
