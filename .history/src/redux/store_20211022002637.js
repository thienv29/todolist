import { createStore } from "redux";
import reducers from "./reducers";
const store = 
export default createStore(reducers,/* preloadedState, */
    +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());