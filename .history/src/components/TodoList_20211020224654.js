import React, {useState} from 'react'
import Todo from './Todo';
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
            {ListTodo.forEach((Todo) => {
              return <Todo todo={Todo.Subject} />
            })}
        </div>
    )
}
