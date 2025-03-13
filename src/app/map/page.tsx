import Navbar from '@/components/Navbar/Navbar'
import { FocusProvider } from '@/providers/FocusProvider'
import React from 'react'

import { Albert_Sans } from 'next/font/google';

import ResizeableDash from '@/components/MapDashboard/Layout/Molecules/ResizeableDash'

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
            <ResizeableDash />
          </div>
        </div>
      </div>
    </FocusProvider>
  )
}

export default Dashboard
