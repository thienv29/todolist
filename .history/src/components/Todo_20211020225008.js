import React from 'react'

export default function Todo({props}) {
    console.log(props.todo);
    return (
        <div>
            {props}
        </div>
    )
}
