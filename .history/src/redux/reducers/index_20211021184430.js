import { combineReducers } from "redux";
export const initialState = [];
const TodoListReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_COMPLETE":
            let tmp = state;
            tmp.forEach((e) => {
                if (e.id == action.data.id) {
                    e.isComplete = action.data.bool;
                }
            });
            return tmp;
        case "DELETE_ELEMENT":
            let tmp = state;
            const removeIndex = tmp.findIndex((item) => item.id === action.data);
            tmp.splice(removeIndex, 1);
            return tmp;
        case "ADD_ELEMENT":
            let tmp = state;
            tmp.push(action.data)
            return tmp;
        case "RESET":
            return initialState;

        default:
            return state;
    }
};
const reducers = combineReducers({
    listTodo:TodoListReducer
});
export default reducers