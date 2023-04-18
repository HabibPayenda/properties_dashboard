import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import { Outlet } from 'react-router-dom'


function HomeSharedLayout() {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  )
}

export default HomeSharedLayout