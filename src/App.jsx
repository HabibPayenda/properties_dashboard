import { useEffect, useState } from "react";
import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./data/configureStore";

import HomeSharedLayout from "./pages/Layouts/HomeSharedLayout";
import Home from "./pages/Home";
import Property from "./pages/Property";
import PropertySharedLaout from "./pages/Layouts/PropertySharedLaout";
import Properties from "./pages/Properties";
import PageNotFound from "./pages/PageNotFound";
import UserSharedLayout from "./pages/Layouts/UserSharedLayout";
import Users from "./pages/Users";
import ReviewsSharedLayout from "./pages/Layouts/ReviewsSharedLayout";
import Reviews from "./pages/Reviews";
import Trainings from "./pages/Trainings";
import TrainingsSharedLayout from "./pages/Layouts/TrainingsSharedLayout";
import TrainersSharedLayout from "./pages/Layouts/TrainersSharedLayout";
import Trainers from "./pages/Trainers";
import SuggestionsSharedLayout from "./pages/Layouts/SuggestionsSharedLayout";
import Suggestions from "./pages/Suggestions";
import PropertyManagersSharedLayout from "./pages/Layouts/PropertyManagersSharedLayout";
import PropertyManagers from "./pages/PropertyManagers";
import OffersSharedLayout from "./pages/Layouts/OffersSharedLayout";
import Offers from "./pages/Offers";
import AppointmentsSharedLayout from "./pages/Layouts/AppointmentsSharedLayout";
import Appointments from "./pages/Appointments";
import Login from "./pages/Login";
import { Provider, useDispatch, useSelector } from "react-redux";
import { localSignIn } from "./data/adminSlice";
import AgentsSharedLayout from "./pages/Layouts/AgentsSharedLayout";
import Agents from "./pages/Agents";
import Agent from "./pages/Agent";
import PropertyManager from "./pages/PropertyManager";
import Homes from "./pages/Homes";
import Cars from "./pages/Cars";
import WareHouses from "./pages/WareHouses";
import Lands from "./pages/Lands";
import HomesSharedLayout from "./pages/Layouts/HomesSharedLayout";
import Dashboard from "./pages/Dashboard";
import User from "./pages/User";
import UserDetailSharedLayout from "./pages/Layouts/UserDetailSharedLayout";
import UserSearches from "./pages/UserSearches";
import UserViews from "./pages/UserViews";
import UserFavorites from "./pages/UserFavorites";
import UserReviews from "./pages/UserReviews";
import UsersReviews from "./pages/UsersReviews";
import AgentsReviews from "./pages/AgentsReviews";
import PropertyManagersReviews from "./pages/PropertyManagersReviews";
import Appointment from "./pages/Appointment";

function App() {
  const token = useSelector((state) => state.admin.token);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(localSignIn());
  }, []);

  const adminPresent = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeSharedLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="properties" element={<PropertySharedLaout />}>
              <Route index element={<Properties />} />
              <Route path=":id" element={<Property />} />
              <Route path="homes" element={<HomesSharedLayout />}>
                <Route index element={<Homes />} />
                <Route path=":id" element={<Home />} />
              </Route>
              <Route path="cars" element={<Cars />} />
              <Route path="warehouses" element={<WareHouses />} />
              <Route path="lands" element={<Lands />} />
            </Route>
            <Route path="agents" element={<AgentsSharedLayout />}>
              <Route index element={<Agents />} />
              <Route path="agent/:id" element={<Agent />} />
            </Route>
            <Route path="users" element={<UserSharedLayout />}>
              <Route index element={<Users />} />
              <Route path=":id" element={<UserDetailSharedLayout />}>
                <Route index element={<User />} />
                <Route path="searches" element={<UserSearches />} />
                <Route path="views" element={<UserViews />} />
                <Route path="favorites" element={<UserFavorites />} />
                <Route path="reviews" element={<UserReviews />} />
              </Route>
            </Route>
            <Route path="reviews" element={<ReviewsSharedLayout />}>
              <Route index element={<Reviews />} />
              <Route path="users" element={<UsersReviews />} />
              <Route path="agents" element={<AgentsReviews />} />
              <Route
                path="property_managers_reviews"
                element={<PropertyManagersReviews />}
              />
            </Route>
            <Route path="trainings" element={<TrainingsSharedLayout />}>
              <Route index element={<Trainings />} />
            </Route>
            <Route path="trainers" element={<TrainersSharedLayout />}>
              <Route index element={<Trainers />} />
            </Route>
            <Route path="suggestions" element={<SuggestionsSharedLayout />}>
              <Route index element={<Suggestions />} />
            </Route>
            <Route
              path="property_managers"
              element={<PropertyManagersSharedLayout />}
            >
              <Route index element={<PropertyManagers />} />
              <Route
                path="property_manager/:id"
                element={<PropertyManager />}
              />
            </Route>
            <Route path="offers" element={<OffersSharedLayout />}>
              <Route index element={<Offers />} />
            </Route>
            <Route path="appointments" element={<AppointmentsSharedLayout />}>
              <Route index element={<Appointments />} />
              <Route path=":id" element={<Appointment />} />
            </Route>
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    );
  };

  const adminNotPresent = () => {
    return <Login />;
  };

  return (
    <div className="grid grid-cols-10">
      {token ? adminPresent() : adminNotPresent()}
    </div>
  );
}

export default App;
