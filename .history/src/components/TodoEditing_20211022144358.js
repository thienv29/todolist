import React from "react";

export default function TodoEditing({ Todo, bool }) {
    return <div>
        {bool ? 
        <div>

        </div> : 
        <span>{Todo.Subject}</span>}
     </div>;
}
