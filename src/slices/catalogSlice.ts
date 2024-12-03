import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import fetchCatalogListData from '@api/api';

interface CatalogItem {
    id: string;
    name: string;
    [key: string]: any;
}

interface CatalogState {
    items: CatalogItem[];
    filteredItems: CatalogItem[];
    loading: boolean;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error?: string;
}

const initialState: CatalogState = {
    items: [],
    filteredItems: [],
    loading: false,
    status: 'idle',
}

export const fetchCatalog = createAsyncThunk<CatalogItem[], void, { rejectValue: string }>(
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
        filterItems(state, action: PayloadAction<string>) {
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
                state.loading = true;
                state.error = undefined;
            })
            .addCase(fetchCatalog.fulfilled, (state, action: PayloadAction<CatalogItem[]>) => {
                state.status = 'succeeded';
                state.items = action.payload;
                state.filteredItems = action.payload;
                state.loading = false;
            })
            .addCase(fetchCatalog.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload || 'Произошла неизвестная ошибка';
                state.loading = false;
            });
    },
});

export const { filterItems } = catalogSlice.actions;

export default catalogSlice.reducer;