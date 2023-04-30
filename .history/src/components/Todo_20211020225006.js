import React from 'react'

export default function Todo({props}) {
    console.log(props.t);
    return (
        <div>
            {props}
        </div>
    )
}
