export const initialState = localStorage.getItem('TodoList') ||  [];
const TodoListReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_COMPLETE":
            state.forEach((e) => {
              if(e.id == action.data){
                  e.id
              }
            })
            return [...state,];
        case "DELETE_ELEMENT":
            return 
        case "RESET":
            return initialState;

        default:
            return state;
    }
};