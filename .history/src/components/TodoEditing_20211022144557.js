import React from "react";

export default function TodoEditing({ Todo, bool }) {
    return <div>
        {bool ? 
        <div>
            <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Google Maps"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
        </div> : 
        <span>{Todo.Subject}</span>}
     </div>;
}
