import Navbar from '@/components/Navbar/Navbar'
import React from 'react'

import { Albert_Sans } from 'next/font/google';

import ResizeableDash from '@/components/MapDashboard/Layout/ResizeableDash'
import { SidebarProvider } from '@/providers/SidebarProvider';

const albertSans = Albert_Sans({
  subsets: ['latin'],
});


function Dashboard() {
  return (
    <SidebarProvider>
      <div className={albertSans.className}>
        <div className='flex flex-col w-full h-screen'>
          <div className='flex flex-col w-full h-full bg-slate-100'>
            {/* <Navbar /> */}
            <ResizeableDash />
          </div>
        </div>
      </div>
    </SidebarProvider>
  )
}

export default Dashboard
