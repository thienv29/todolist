import { initialState } from "../reducers/qrcode";

export const setComplete = function (value) {
    return {
        type: "SET_COMPLETE",
        data: value,
    };
};
export const deleteElement = function (ID) {
    return {
        type: "DELETE_ELEMENT",
        data: value,
    };
};

export const reset = () => ({
    type: "RESET",
    data: initialState,
});
