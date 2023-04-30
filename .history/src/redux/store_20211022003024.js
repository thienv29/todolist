import { createStore } from "redux";
import reducers from "./reducers";
 /* eslint-disable no-underscore-dangle */
const store = createStore(reducers,/* preloadedState, */
    +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    + /* eslint-enable */
export default store;