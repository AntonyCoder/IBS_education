import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProductData } from '@api/api';

export const fetchProduct = createAsyncThunk(
    'product/fetchProduct',
    async (id) => {
        const response = await fetchProductData(id);
        return response.content;
    }
);

const productSlice = createSlice({
    name: 'product',
    initialState: {
        product: null,
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProduct.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProduct.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.product = action.payload;
            })
            .addCase(fetchProduct.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default productSlice.reducer;