import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { fetchProductData } from '@api/api';
import { IProduct, IProductState } from "./productTypes";

const initialState: IProductState = {
    product: null,
    status: 'idle',
    error: null,
}

export const fetchProduct = createAsyncThunk<IProduct, string>(
    'product/fetchProduct',
    async (id: string) => {
        const response = await fetchProductData(id);
        if(!response) {
            throw new Error ('Не удалось загрузить данные');
        }
        return response;
    }
);

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProduct.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProduct.fulfilled, (state, action: PayloadAction<IProduct>) => {
                state.status = 'succeeded';
                state.product = action.payload;
            })
            .addCase(fetchProduct.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Неизвестная ошибка';
            });
    },
});

export default productSlice.reducer;