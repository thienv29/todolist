import React, {use} from 'react'
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
            {ListTodo.map((Todo) => {
              return <Todo todo={Todo} />
            })}
        </div>
    )
}
