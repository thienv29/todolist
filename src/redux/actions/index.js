
export const setComplete = function (id,bool) {
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
export const editElement = function (element) {
    return {
        type: "EDIT_ELEMENT",
        data: element,
    };
};
export const resetRemainingDays = function (element) {
    return {
        type: "RESET_REMAININGDAYS",
        data: element,
    };
};
export const saveList = function () {
    return {
        type: "SAVE",
    };
};

export const reset = () => ({
    type: "RESET",
});
