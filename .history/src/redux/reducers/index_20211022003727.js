import { combineReducers } from "redux";
import Todo
const reducers = combineReducers({
    listTodo: TodoListReducer,
});
export default reducers;