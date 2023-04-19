import { configureStore } from '@reduxjs/toolkit';
import adminSlice from './adminSlice';
import agentsSlice from './agentsSlice';
const store = configureStore({
  reducer: {
    admin: adminSlice,
    agents: agentsSlice
  },
});

export default store;