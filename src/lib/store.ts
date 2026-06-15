import { configureStore, createSlice } from "@reduxjs/toolkit";

type SiteState = {
  projectName: string;
};

const initialState: SiteState = {
  projectName: "The Silver Guardian",
};

const siteSlice = createSlice({
  name: "site",
  initialState,
  reducers: {},
});

export const store = configureStore({
  reducer: {
    site: siteSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
