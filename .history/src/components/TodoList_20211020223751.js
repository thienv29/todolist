import React from 'react'

export default function TodoList() {
    const [ListTodo, setListTodo] = useState(localStorage.getItem('TodoList') || []);
    
    return (
        <div>
            {ListTodo.map((todo) => {
              
            })}
        </div>
    )
}
