export const initialState =   [];
const TodoListReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_COMPLETE":
            let tmp= 
            state.forEach((e) => {
              if(e.id == action.data.id){
                  e.isComplete = action.data.type
              }
            })
            return state;
        case "DELETE_ELEMENT":
            return 
        case "RESET":
            return initialState;

        default:
            return state;
    }
};