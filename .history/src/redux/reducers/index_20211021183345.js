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
            let tmp = state;
            const removeIndex = tmp.findIndex((item) => item.id === action.data);
            tmp.splice(removeIndex, 1);
            return tmp;
        case "RESET":
            return initialState;

        default:
            return state;
    }
};
