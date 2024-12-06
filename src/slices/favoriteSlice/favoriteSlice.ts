import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFavoritesState } from "./types";

const initialState: IFavoritesState = {
    favoriteIds: [],
}

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        toggleFavorite: (state, action: PayloadAction<string>) => {
            const productId = action.payload;
            if (state.favoriteIds.includes(productId)) {
                state.favoriteIds = state.favoriteIds.filter(id => id !== productId);
            } else {
                state.favoriteIds.push(productId);
            }
        }
    }
})

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;