import { combineReducers } from "redux";
import TodoListReducer from './todolistReducer.j'
const reducers = combineReducers({
    listTodo: TodoListReducer,
});
export default reducers;