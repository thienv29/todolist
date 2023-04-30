export const initialState = localStorage.getItem('TodoList') ||  [];
const TodoListReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_VALUE":
            return { ...state, value: action.data };
        case "DELETE_ELEMENT":
            return
        case "RESET":
            return initialState;

        default:
            return state;
    }
};