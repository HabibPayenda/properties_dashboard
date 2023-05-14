import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSidebarShown: false,
  value: 0,
};

const appManagementSlice = createSlice({
  name: "appManagement",
  initialState,
  reducers: {
    increment(state) {
      state.value++;
    },
    showSidebar(state) {
      state.isSidebarShown = !state.isSidebarShown;
    },
    decrement(state) {
      state.value--;
    },
    incrementByAmount(state, action) {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount, showSidebar } =
  appManagementSlice.actions;
export default appManagementSlice.reducer;
