import React from "react";
import TodoList from "./components/TodoList.js";
import Input from "./components/Input.js";
import {Toaster} from 'react-hot-toast'
import Grid from "@mui/material/Grid";
export default function App() {
    return (
        <div  className="main">
            <Input />
            <TodoList />
                <Toaster position="top-center" reverseOrder={false} />
        </div>
    );
}
