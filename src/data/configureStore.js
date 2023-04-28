import { configureStore } from '@reduxjs/toolkit';
import adminSlice from './adminSlice';
import agentsSlice from './agentsSlice';
import propertyManagersSlice from './propertyManagersSlice';
import  homesSlice from './homeSlice';
import CarsSlice from './CarsSlice';
import LandsSlice from './LandsSlice';
const store = configureStore({
  reducer: {
    admin: adminSlice,
    agents: agentsSlice,
    propertyManagers: propertyManagersSlice,
    homes: homesSlice,
    cars: CarsSlice,
    lands: LandsSlice
  },
});

export default store;