import { useState } from 'react'
import './app.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sidebar from './components/sidebar/Sidebar'
import Main from './components/main/main'
import HomeSharedLayout from './pages/Layouts/HomeSharedLayout'
import Home from './pages/home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="grid grid-cols-10">
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeSharedLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
     </BrowserRouter>
     
    </div>
  )
}

export default App
