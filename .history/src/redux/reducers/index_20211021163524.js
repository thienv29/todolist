export const initialState = localStorage.getItem('TodoList') ||  [];
const QrcodeReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_VALUE":
            return { ...state, value: action.data };
        case "SET_BACKGROUND":
            return { ...state, bgColor: action.data };
        case "SET_FOREGROUND":
            return { ...state, fgColor: action.data };
        case "SET_LEVEL":
            return { ...state, level: action.data };
        case "SET_LOGO":
            return { ...state, imageSettings: action.data };
        case "RESET":
            return initialState;

        default:
            return state;
    }
};