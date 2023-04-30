import React, {useState} from 'react'
import Todo from './Todo.js';
export default function TodoList() {
    const [ListTodo, setListTodo] = useState(localStorage.getItem('TodoList') || [
        {
            Subject:'TKGD',
            Time:'123'
        },
        {
            Subject:'Toan',
            Time:'123'
        }
    ]);

    return (
        <div>
            {ListTodo.forEach((TodoChild) => {
              return <Todo />
            })}
             <Todo  />
        </div>
    )
}
