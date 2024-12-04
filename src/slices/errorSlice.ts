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
        setCurrentError: (state, action: PayloadAction<string | null>) => {
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