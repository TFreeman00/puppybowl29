import { configureStore } from "@reduxjs/toolkit";
import { PuppyBowlApi } from "./api";
import PuppyBowlSlice from "./puppyBowlSlice";

// Create store
export const store = configureStore({
  reducer: {
    [PuppyBowlApi.reducerPath]: PuppyBowlApi.reducer,
    puppyBowl: PuppyBowlSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(PuppyBowlApi.middleware),
});

export const { useGetPlayersQuery } = PuppyBowlApi;
