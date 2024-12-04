import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Error {
    message: string;
    code?: string;
}

interface ErrorState {
    errorQueue: string[];
    currentError: string | null;
}

const initialState: ErrorState = {
    errorQueue: [],
    currentError: null,
}

const errorSlice = createSlice({
    name: 'error',
    initialState,
    reducers: {
        addError: (state, action: PayloadAction<string>) => {
            state.errorQueue.push(action.payload);
        },
        removeError: (state) => {
            state.errorQueue.shift();
        },
        setCurrentError: (state, action: PayloadAction<string | null>) => {
            state.currentError = action.payload;
        },
        clearCurrentError: (state) => {
            state.currentError = null;
        },
    },
});

export const { addError, removeError, setCurrentError, clearCurrentError } = errorSlice.actions;

export default errorSlice.reducer;