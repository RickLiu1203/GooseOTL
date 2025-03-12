import MapComponent from '@/components/dashboard/MapComponent'
import SearchList from '@/components/dashboard/SearchList/SearchList'
import SideBox from '@/components/dashboard/SideBox'
import Navbar from '@/components/Navbar/Navbar'
import { FocusProvider } from '@/providers/FocusProvider'
import React from 'react'

import { Albert_Sans } from 'next/font/google';
import MapboxView from '@/components/dashboard/MapboxView'

const albertSans = Albert_Sans({
  subsets: ['latin'],
});


function Dashboard() {
  return (
    <FocusProvider>
      <div className={albertSans.className}>
        <div className='flex flex-col w-full h-screen'>
          <div className='flex flex-col w-full h-full bg-slate-100'>
            <Navbar />
            <div className='flex w-full h-9/10'>
              <SideBox />
              <MapboxView />
            </div>
          </div>
        </div>
      </div>
    </FocusProvider>
  )
}

export default Dashboard
