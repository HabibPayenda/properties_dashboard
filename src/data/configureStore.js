import { configureStore } from '@reduxjs/toolkit';
import adminSlice from './adminSlice';
import agentsSlice from './agentsSlice';
import propertyManagersSlice from './propertyManagersSlice';
import  homesSlice from './homeSlice';
const store = configureStore({
  reducer: {
    admin: adminSlice,
    agents: agentsSlice,
    propertyManagers: propertyManagersSlice,
    homes: homesSlice
  },
});

export default store;