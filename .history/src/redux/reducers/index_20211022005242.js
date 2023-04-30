import { combineReducers } from "redux";
import TodoListReducer from "./todolistReducer.js";
const reducers = combineReducers({
    listTodo: TodoListReducer,
});
export default reducers;
