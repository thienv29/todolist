
export const initialState =JSON.parse(localStorage.getItem('listTodo') || '[]') ;
const TodoListReducer = (state = initialState, action) => {
    const tmp = [...state]
    switch (action.type) {
        case "SET_COMPLETE":
            
            tmp.forEach((e) => {
                if (e.id === action.data.id) {
                    e.isComplete = action.data.bool;
                }
            });
            return tmp;
        case "DELETE_ELEMENT":
            const removeIndex = tmp.findIndex((item) => item.id === action.data);
            tmp.splice(removeIndex, 1);
            return tmp;
        case "ADD_ELEMENT":
            console.log('add');
            tmp.push({
                Subject: action.data.note,
                time: action.data.time,
                id: tmp.length + 1,
                isComplete: false,
            });

            return tmp;
        case "EDIT_ELEMENT":
            tmp.forEach((e) => {
                if (e.id === action.data.id) {
                    e.Subject = action.data.note;
                }
            });
            return [];
        case "RESET":
            return [];

        default:
            return state;
    }
};

export default TodoListReducer