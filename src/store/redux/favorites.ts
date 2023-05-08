import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";

interface FavoritesState {
  ids: string[];
}

interface FavoritePayload {
  id: string;
}

const favoritesSlice: Slice<FavoritesState> = createSlice({
  name: "favorites",
  initialState: { ids: [] } as FavoritesState,
  reducers: {
    addFavorite: (state, action: PayloadAction<FavoritePayload>) => {
      state.ids.push(action.payload.id);
    },
    removeFavorite: (state, action: PayloadAction<FavoritePayload>) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    }
  }
});

export const addFavorite = favoritesSlice.actions.addFavorite;
export const removeFavorite = favoritesSlice.actions.removeFavorite;
export default favoritesSlice.reducer;
