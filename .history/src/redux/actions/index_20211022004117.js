

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

export const reset = () => ({
    type: "RESET",
    data:  [{
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
    }]
});
