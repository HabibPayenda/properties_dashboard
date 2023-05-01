import { configureStore } from '@reduxjs/toolkit';
import adminSlice from './adminSlice';
import agentsSlice from './agentsSlice';
import propertyManagersSlice from './propertyManagersSlice';
import  homesSlice from './homeSlice';
import CarsSlice from './CarsSlice';
import LandsSlice from './LandsSlice';
import usersSlice from './usersSlice';
import userReviewsSlice from './userReviewsSlice';
import agentReviewsSlice from './agentReviewsSlice';
import propertyManagerReviewsSlice from './propertyManagerReviewsSlice';
import appointmentSlice from './appointmentSlice';
const store = configureStore({
  reducer: {
    admin: adminSlice,
    agents: agentsSlice,
    propertyManagers: propertyManagersSlice,
    homes: homesSlice,
    cars: CarsSlice,
    lands: LandsSlice,
    users: usersSlice,
    userReviews: userReviewsSlice,
    agentReviews: agentReviewsSlice,
    propertyManagerReviews: propertyManagerReviewsSlice,
    appointments: appointmentSlice
  },
});

export default store;