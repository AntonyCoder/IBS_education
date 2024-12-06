import { configureStore } from '@reduxjs/toolkit';
import catalogReducer from '@slices/catalogSlice/catalogSlice';
import productReducer from '@slices/productSlice/productSlice';
import errorReducer from '@slices/errorSlice/errorSlice';
import favoriteSlice from '@slices/favoriteSlice';
import quantitySlice from '@slices/quantitySlice';

const store = configureStore({
    reducer: {
        catalog: catalogReducer,
        product: productReducer,
        error: errorReducer,
        favorite: favoriteSlice,
        quantity: quantitySlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;