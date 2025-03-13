import React from 'react'

import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
  } from "@/components/ui/resizable"

import SideBox from './Molecules/SideBox'
import MapboxView from './Molecules/MapboxView'

function ResizeableDash() {
  return (
    <div className='flex w-full h-full'>
        <ResizablePanelGroup
        direction="horizontal"
        className="w-full rounded-lg border"
        >
        <ResizablePanel defaultSize={25} maxSize={50} minSize={25}>
            <SideBox />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={75}>
            <MapboxView />
        </ResizablePanel>
        </ResizablePanelGroup>
    </div>
  )
}

export default ResizeableDash