import { useState } from 'react'
import './app.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeSharedLayout from './pages/Layouts/HomeSharedLayout'
import Home from './pages/Home'
import Property from './pages/Property'
import PropertySharedLaout from './pages/Layouts/PropertySharedLaout'
import Properties from './pages/Properties'
import PageNotFound from './pages/PageNotFound'
import UserSharedLayout from './pages/Layouts/UserSharedLayout'
import Users from './pages/Users'
import ReviewsSharedLayout from './pages/Layouts/ReviewsSharedLayout'
import Reviews from './pages/Reviews';
import Trainings from './pages/Trainings'
import TrainingsSharedLayout from './pages/Layouts/TrainingsSharedLayout'
import TrainersSharedLayout from './pages/Layouts/TrainersSharedLayout'
import Trainers from './pages/Trainers'
import SuggestionsSharedLayout from './pages/Layouts/SuggestionsSharedLayout'
import Suggestions from './pages/Suggestions'
import PropertyManagersSharedLayout from './pages/Layouts/PropertyManagersSharedLayout'
import PropertyManagers from './pages/PropertyManagers'
import OffersSharedLayout from './pages/Layouts/OffersSharedLayout'
import Offers from './pages/Offers'
import AppointmentsSharedLayout from './pages/Layouts/AppointmentsSharedLayout'
import Appointments from './pages/Appointments'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="grid grid-cols-10">
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeSharedLayout />}>
          <Route index element={<Home />} />
          <Route path='properties' element={<PropertySharedLaout />}>
            <Route index element={<Properties />} />
            <Route path=':id' element={<Property />} />
          </Route>
          <Route path='users' element={<UserSharedLayout />}>
            <Route index element={<Users />} />
          </Route>
          <Route path='reviews' element={<ReviewsSharedLayout />}>
            <Route index element={<Reviews />} />
          </Route>
          <Route path='trainings' element={<TrainingsSharedLayout />}>
            <Route index element={<Trainings />} />
          </Route>
          <Route path='trainers' element={<TrainersSharedLayout />}>
            <Route index element={<Trainers />} />
          </Route>
          <Route path='suggestions' element={<SuggestionsSharedLayout />}>
            <Route index element={<Suggestions />} />
          </Route>
          <Route path='property_managers' element={<PropertyManagersSharedLayout />}>
            <Route index element={<PropertyManagers />} />
          </Route>
          <Route path='offers' element={<OffersSharedLayout />}>
            <Route index element={<Offers />} />
          </Route>
          <Route path='appointments' element={<AppointmentsSharedLayout />}>
            <Route index element={<Appointments />} />
          </Route>
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
     </BrowserRouter>
     
    </div>
  )
}

export default App
