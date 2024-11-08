import MapComponent from '@/components/dashboard/MapComponent'
import SearchList from '@/components/dashboard/SearchList'
import SideBox from '@/components/dashboard/SideBox'
import Navbar from '@/components/Navbar'
import { FocusProvider } from '@/providers/FocusProvider'
import React from 'react'

function Dashboard() {
  return (
    <FocusProvider>
      <div className='flex flex-col w-full h-screen'>
        <Navbar />
        <div className='flex flex-row w-full h-[92%]'>
          <SideBox />
        </div>
      </div>
    </FocusProvider>
  )
}

export default Dashboard
