import { combineReducers } from "redux";
const reducers = combineReducers({
    listTodo: TodoListReducer,
});
export default reducers;