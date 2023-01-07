import { configureStore, createSlice } from "@reduxjs/toolkit";

const limitSlice = createSlice({
  name: "limit",
  initialState: { limit: 1, initialText: "", initialArray: [] },
  reducers: {
    increment(state, action) {
      state.limit++;
    },
    decrement(state, action) {
      state.limit--;
    },
    changeText(state, action) {
      state.initialText = action.payload;
      state.initialArray = state.initialText.split(/\t/);
    },
    handleDefaultLimit(state, action) {
      state.limit = 1;
      state.initialText = null;
      state.initialArray = [];
    }
  }
});

export const actions = limitSlice.actions;

const store = configureStore({
  reducer: limitSlice.reducer
});

export default store;
