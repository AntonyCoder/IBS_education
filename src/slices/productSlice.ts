import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { fetchProductData } from '@api/api';

interface Product {
    id: string;
    name: string;
    description: string;
    [key: string]: any;
}

interface ProductState {
    product: Product | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: ProductState = {
    product: null,
    status: 'idle',
    error: null,
}

export const fetchProduct = createAsyncThunk<Product, string>(
    'product/fetchProduct',
    async (id: string) => {
        const response = await fetchProductData(id);
        if(!response) {
            throw new Error ('Не удалось загрузить данные');
        }
        return response.content;
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
            .addCase(fetchProduct.fulfilled, (state, action: PayloadAction<Product>) => {
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