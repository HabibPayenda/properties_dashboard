import { configureStore } from "@reduxjs/toolkit";
import adminSlice from "./adminSlice";
import agentsSlice from "./agentsSlice";
import propertyManagersSlice from "./propertyManagersSlice";
import homesSlice from "./homeSlice";
import CarsSlice from "./CarsSlice";
import LandsSlice from "./LandsSlice";
import usersSlice from "./usersSlice";
import userReviewsSlice from "./userReviewsSlice";
import agentReviewsSlice from "./agentReviewsSlice";
import propertyManagerReviewsSlice from "./propertyManagerReviewsSlice";
import appointmentSlice from "./appointmentSlice";
import appManagement from "./appManagement";
import PropertiesSlice from "./PropertiesSlice";
import offersSlice from "./offersSlice";
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
    appointments: appointmentSlice,
    appManagement: appManagement,
    properties: PropertiesSlice,
    offers: offersSlice,
  },
});

export default store;
