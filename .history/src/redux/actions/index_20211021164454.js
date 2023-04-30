import { initialState } from "../reducers/qrcode";

export const setComplete = function (value) {
    return {
        type: "SET_COMPLETE",
        data: value,
    };
};
export const deleteElementOf = function (value) {
    return {
        type: "SET_VALUE",
        data: value,
    };
};

export const reset = () => ({
    type: "RESET",
    data: initialState,
});
