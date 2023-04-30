import { initialState } from "../reducers/qrcode";

export const setComplete = function (value) {
    return {
        type: "SET_VALUE",
        data: value,
    };
};
export const deleter = function (value) {
    return {
        type: "SET_VALUE",
        data: value,
    };
};

export const reset = () => ({
    type: "RESET",
    data: initialState,
});
