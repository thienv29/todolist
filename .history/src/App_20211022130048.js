import React from "react";
import TodoList from "./components/TodoList.js";
import Input from "./components/Input.js";
import Toaster from ''
export default function App() {
    return (
        <div className="main">
            <Input />
            <TodoList />
            <div>
                <Toaster position="top-center" reverseOrder={false} />
            </div>
        </div>
    );
}
