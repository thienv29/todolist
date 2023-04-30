import React from "react";
import TodoList from "./components/TodoList.js";
import Input from "./components/Input.js";
import {Toaster} from 'react-hot-toast'
export default function App() {
    return (
        <Grid className="main">
            <Input />
            <TodoList />
                <Toaster position="top-center" reverseOrder={false} />
        </Grid>
    );
}
