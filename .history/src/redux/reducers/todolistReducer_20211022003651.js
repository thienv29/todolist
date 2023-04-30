import { combineReducers } from "redux";
export const initialState = [
    {
        id: 1,
        Subject: "TKGD",
        Time: "123",
        isComplete: false,
    },
    {
        id: 2,
        Subject: "Toan",
        Time: "123",
        isComplete: false,
    },
];
const TodoListReducer = (state = initialState, action) => {
    let tmp = state;
    switch (action.type) {
        case "SET_COMPLETE":
            tmp.forEach((e) => {
                if (e.id === action.data.id) {
                    e.isComplete = action.data.bool;
                }
            });
            return tmp;
        case "DELETE_ELEMENT":
            const removeIndex = tmp.findIndex((item) => item.id === action.data);
            tmp.splice(removeIndex, 1);
            return tmp;
        case "ADD_ELEMENT":

            tmp.push({
                Subject: action.data.note,
                time: action.data.time,
                id: tmp.length + 1,
                isComplete: false,
            });

            return tmp;
        case "RESET":
            return initialState;

        default:
            return state;
    }
};

