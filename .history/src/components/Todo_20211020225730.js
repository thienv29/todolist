import React from 'react'

export default function Todo(props) {
    console.log(props.Todo);
    return (
        <div>
            {props.Todo}
        </div>
    )
}
