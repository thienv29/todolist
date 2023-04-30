import { initialState } from "../reducers/index.js";

export const setComplete = function (id,type) {
    return {
        type: "SET_COMPLETE",
        data: {
            id,
            bool
        }
    };
};
export const deleteElement = function (id) {
    return {
        type: "DELETE_ELEMENT",
        data: id,
    };
};
export const addElement = function (element) {
    return {
        type: "ADD_ELEMENT",
        data: element,
    };
};

export const reset = () => ({
    type: "RESET",
    data: initialState,
});
