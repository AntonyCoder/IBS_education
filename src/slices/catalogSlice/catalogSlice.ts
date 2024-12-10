import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import fetchCatalogListData from '@api/api';
import { ICatalogItem, ICatalogState } from "./types";

const initialState: ICatalogState = {
    items: [],
    searchQuery: "",
    loading: false,
    status: 'idle',
}

export const fetchCatalog = createAsyncThunk<ICatalogItem[], void, { rejectValue: string }>(
    'catalog/fetchCatalog',
    async (_, { rejectWithValue }) => {
        try {
            const data = await fetchCatalogListData();
            return data;
        } catch (error) {
            return rejectWithValue((error as Error).message)
        }
    }
);

const catalogSlice = createSlice({
    name: 'catalog',
    initialState,
    reducers: {
        setSearchQuery(state, action: PayloadAction<string>) {
            state.searchQuery = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCatalog.pending, (state) => {
                state.status = 'loading';
                state.loading = true;
                state.error = undefined;
            })
            .addCase(fetchCatalog.fulfilled, (state, action: PayloadAction<ICatalogItem[]>) => {
                state.status = 'succeeded';
                state.items = action.payload;
                state.loading = false;
            })
            .addCase(fetchCatalog.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload || 'Произошла неизвестная ошибка';
                state.loading = false;
            });
    },
});

export const { setSearchQuery } = catalogSlice.actions;

export default catalogSlice.reducer;