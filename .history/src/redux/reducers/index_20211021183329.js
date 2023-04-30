export const initialState = [];
const TodoListReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_COMPLETE":
            let tmp = state;
            tmp.forEach((e) => {
                if (e.id == action.data.id) {
                    e.isComplete = action.data.type;
                }
            });
            return tmp;
        case "DELETE_ELEMENT":
            const removeIndex = state.findIndex((item) => item.id === action.data);
            state.splice(removeIndex, 1);
            return;
        case "RESET":
            return initialState;

        default:
            return state;
    }
};
