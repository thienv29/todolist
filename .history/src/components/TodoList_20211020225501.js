import React, {useState} from 'react'
import Todo from './Todo.js';
export default function TodoList() {
    const [ListTodo, setListTodo] = useState([
        {
            Subject:'TKGD',
            Time:'123'
        },
        {
            Subject:'Toan',
            Time:'123'
        }
    ]);
    console.log(ListTodo);

    return (
            {ListTodo.forEach((TodoChild) => {
              return (<Todo />)
            })}
            
    )
}
