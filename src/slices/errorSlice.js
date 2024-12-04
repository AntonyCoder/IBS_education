import { createSlice } from "@reduxjs/toolkit";

const errorSlice = createSlice({
    name: 'error',
    initialState: {
        errorQueue: [],
        currentError: null,
    },
    reducers: {
        addError: (state, action) => {
            return{
                ...state,
                errorQueue: [...state.errorQueue, action.payload]
            }
        },
        removeError: (state) => {
            return{
                ...state,
                errorQueue: state.errorQueue.slice(1),
            }
        },
        setCurrentError: (state, action) => {
            return{
                ...state,
                currentError: action.payload,
            }
        },
        clearCurrentError: (state) => {
            return{
                ...state,
                currentError: null,
            }
        },
    },
});

export const { addError, removeError, setCurrentError, clearCurrentError } = errorSlice.actions;

export default errorSlice.reducer;