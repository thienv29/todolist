import { combineReducers } from "redux";
import TodoListReducer from './todolistReducer'
const reducers = combineReducers({
    listTodo: TodoListReducer,
});
export default reducers;