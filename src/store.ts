import { configureStore } from '@reduxjs/toolkit';
import catalogReducer from '@slices/catalogSlice';
import productReducer from '@slices/productSlice';
import errorReducer from '@slices/errorSlice';
import favoriteSlice from '@slices/favoriteSlice';

const store = configureStore({
    reducer: {
        catalog: catalogReducer,
        product: productReducer,
        error: errorReducer,
        favorite: favoriteSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;