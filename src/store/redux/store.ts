import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./favorites";

export const store = configureStore({
  reducer: {
    favoriteMeals: favoritesReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
