import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSidebarShown: false,
  value: 0,
};

const appManagementSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.value++;
    },
    showSidebar(state) {
      state.isSidebarShown = true;
    },
    decrement(state) {
      state.value--;
    },
    incrementByAmount(state, action) {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } =
  appManagementSlice.actions;
export default appManagementSlice.reducer;
