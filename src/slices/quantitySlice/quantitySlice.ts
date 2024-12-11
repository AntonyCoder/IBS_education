import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IQuantityState } from "./types";


const initialState: IQuantityState = {
    value: 1,
};

const quantitySlice = createSlice({
    name: 'quantity',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            if (state.value > 1) {
                state.value -= 1;
            }
        },
        setQuantity: (state, action: PayloadAction<number>) => {
            if (action.payload > 0) {
                state.value = action.payload;
            }
        },
        resetQuantity: () => initialState,
    }
})

export const { increment, decrement, setQuantity, resetQuantity } = quantitySlice.actions;
export default quantitySlice.reducer;