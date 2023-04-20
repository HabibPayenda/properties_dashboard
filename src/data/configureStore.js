import { configureStore } from '@reduxjs/toolkit';
import adminSlice from './adminSlice';
import agentsSlice from './agentsSlice';
import propertyManagersSlice from './propertyManagersSlice';
const store = configureStore({
  reducer: {
    admin: adminSlice,
    agents: agentsSlice,
    propertyManagers: propertyManagersSlice
  },
});

export default store;