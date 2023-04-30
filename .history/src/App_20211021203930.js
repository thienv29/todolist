import React from "react";
import TodoList from "./components/TodoList.js";
import Input from "./components/Input.js";
import { useSelector } from "react-redux";
export default function App() {
  
  return (
    <div className="main">
      <Input />
      <TodoList ListTodo={ListTodo} />
    </div>
  );
}
