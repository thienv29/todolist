import React from "react";
import TodoList from "./components/TodoList.js";
import Input from "./components/Input.js";
import use
export default function App() {
  const ListTodo = useSelector((state) => state.listTodo);
  return (
    <div className="main">
      <Input />
      <TodoList ListTodo={ListTodo} />
    </div>
  );
}
