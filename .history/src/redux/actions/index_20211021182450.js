import { initialState } from "../reducers/qrcode";

export const setComplete = function (value) {
    return {
        type: "SET_COMPLETE",
        data: value,
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
