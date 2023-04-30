import { combineReducers } from "redux";
import TodoListReducer
const reducers = combineReducers({
    listTodo: TodoListReducer,
});
export default reducers;