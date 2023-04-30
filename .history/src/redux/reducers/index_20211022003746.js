import { combineReducers } from "redux";
import TodoListReducer from './'
const reducers = combineReducers({
    listTodo: TodoListReducer,
});
export default reducers;