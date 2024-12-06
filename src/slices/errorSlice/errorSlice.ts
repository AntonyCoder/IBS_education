import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IErrorState } from "./errorTypes";


const initialState: IErrorState = {
    errorQueue: [],
    currentError: null,
}

const errorSlice = createSlice({
    name: 'error',
    initialState,
    reducers: {
        addError: (state, action: PayloadAction<Error>) => {
            return {
                ...state,
                errorQueue: [...state.errorQueue, action.payload]
            }
        },
        removeError: (state) => {
            return {
                ...state,
                errorQueue: state.errorQueue.slice(1),
            }
        },
        setCurrentError: (state, action: PayloadAction<Error | null>) => {
            return {
                ...state,
                currentError: action.payload,
            }
        },
        clearCurrentError: (state) => {
            return {
                ...state,
                currentError: null,
            }
        },
    },
});

export const { addError, removeError, setCurrentError, clearCurrentError } = errorSlice.actions;

export default errorSlice.reducer;