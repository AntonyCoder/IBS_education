import { configureStore } from '@reduxjs/toolkit';
import catalogReducer from '@slices/catalogSlice/catalogSlice';
import productReducer from '@slices/productSlice/productSlice';
import errorReducer from '@slices/errorSlice/errorSlice';

const store = configureStore({
    reducer: {
        catalog: catalogReducer,
        product: productReducer,
        error: errorReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;