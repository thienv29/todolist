import { initialState } from "../reducers/qrcode";

export const setComplete = function (value) {
    return {
        type: "SET_COMPLETE",
        data: value,
    };
};
export const deleteElement = function (value) {
    return {
        type: "SET_T",
        data: value,
    };
};

export const reset = () => ({
    type: "RESET",
    data: initialState,
});
