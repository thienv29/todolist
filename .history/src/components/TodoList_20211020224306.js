import React from 'react'
import Todo from './Todo';
export default function TodoList() {
    const [ListTodo, setListTodo] = useState(localStorage.getItem('TodoList') || [
        {
            Subject:'TKGD',
            Time:'123'
        }
        {
            Subject:'TKGD',
            Time:'123'
        }
    ]);

    return (
        <div>
            {ListTodo.map((Todo) => {
              return <Todo todo={Todo} />
            })}
        </div>
    )
}
