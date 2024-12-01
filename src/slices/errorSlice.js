import { createSlice } from "@reduxjs/toolkit";

const errorSlice = createSlice({
    name: 'error',
    initialState: {
        errorQueue: [],
        currentError: null,
    },
    reducers: {
        addError: (state, action) => {
            state.errorQueue.push(action.payload);
        },
        removeError: (state) => {
            state.errorQueue.shift();
        },
        setCurrentError: (state, action) => {
            state.currentError = action.payload;
        },
        clearCurrentError: (state) => {
            state.currentError = null;
        },
    },
});

export const { addError, removeError, setCurrentError, clearCurrentError } = errorSlice.actions;

export default errorSlice.reducer;