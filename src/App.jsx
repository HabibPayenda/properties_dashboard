import { useState } from 'react'
import './app.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sidebar from './components/sidebar/Sidebar'
import Main from './components/main/main'
import HomeSharedLayout from './pages/Layouts/HomeSharedLayout'
import Home from './pages/Home'
import Property from './pages/Property'
import PropertySharedLaout from './pages/Layouts/PropertySharedLaout'
import Properties from './pages/Properties'
import PageNotFound from './pages/PageNotFound'
import UserSharedLayout from './pages/Layouts/UserSharedLayout'
import Users from './pages/Users'


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
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
     </BrowserRouter>
     
    </div>
  )
}

export default App
