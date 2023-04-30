import React from "react";
import TodoList from "./components/TodoList.js";
import Input from "./components/Input.js";
import { useSelector } from "react-redux";
import _ from "underscore";
export default function App() {
  
  const ListTodo = useSelector((state) => state.listTodo, _.isEqual);
  return (
    <div className="main">
      <Input />
      <TodoList />
    </div>
  );
}
