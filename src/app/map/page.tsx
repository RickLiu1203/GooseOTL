import MapComponent from '@/components/dashboard/organisms/MapComponent'
import SearchList from '@/components/dashboard/organisms/SearchList'
import SideBox from '@/components/dashboard/organisms/SideBox'
import Navbar from '@/components/Navbar'
import { FocusProvider } from '@/providers/FocusProvider'
import React from 'react'

import { Albert_Sans } from 'next/font/google';
import MapboxView from '@/components/dashboard/organisms/MapboxView'

const albertSans = Albert_Sans({
  subsets: ['latin'],
});


function Dashboard() {
  return (
    <FocusProvider>
      <div className={albertSans.className}>
        <div className='flex flex-col w-full h-screen'>
          <Navbar />
          <div className='flex flex-row w-full h-[92%]'>
            <SideBox />
            <MapboxView />
          </div>
        </div>
      </div>
    </FocusProvider>
  )
}

export default Dashboard
