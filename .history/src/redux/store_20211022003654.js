import { createStore } from "redux";
import reducers from "./reducers/todolistReducer";
const store = createStore(reducers)
export default store;