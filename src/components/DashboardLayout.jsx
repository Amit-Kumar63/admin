import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Top from './Top'

const DashboardLayout = ({children}) => {
  return (
    <main className='flex'>
        <Sidebar/>
        <div className='flex-8'>
        <Top/>
      <Outlet context={children}/>
        </div>
    </main>
  )
}

export default DashboardLayout
