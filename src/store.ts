import { configureStore } from '@reduxjs/toolkit';
import catalogReducer from '@slices/catalogSlice/catalogSlice';
import productReducer from '@slices/productSlice/productSlice';
import errorReducer from '@slices/errorSlice/errorSlice';
import favoriteReducer from '@slices/favoriteSlice/favoriteSlice';
import quantityReducer from '@slices/quantitySlice/quantitySlice';

const store = configureStore({
    reducer: {
        catalog: catalogReducer,
        product: productReducer,
        error: errorReducer,
        favorite: favoriteReducer,
        quantity: quantityReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;