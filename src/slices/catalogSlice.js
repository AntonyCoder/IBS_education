import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fetchCatalogListData from '@api/api';

export const fetchCatalog = createAsyncThunk(
    'catalog/fetchCatalog',
    async () => {
        const data = await fetchCatalogListData();
        return data;
    }
);

const catalogSlice = createSlice({
    name: 'catalog',
    initialState: {
        filterItems: [],
        loading: false,
        status: 'idle',
    },
    reducers: {
        filterItems(state, action) {
            const query = action.payload.toLowerCase();
            state.filteredItems = state.items.filter((item) =>
              item.name.toLowerCase().includes(query)
            );
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCatalog.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCatalog.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
                state.filteredItems = action.payload;
            })
            .addCase(fetchCatalog.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const { filterItems } = catalogSlice.actions;

export default catalogSlice.reducer;