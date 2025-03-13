import React from 'react'

import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
  } from "@/components/ui/resizable"

import SideBox from '../Atoms/SideBox'
import MapboxView from '../Atoms/MapboxView'

function ResizeableDash() {
  return (
    <div className='flex w-full h-9/10'>
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