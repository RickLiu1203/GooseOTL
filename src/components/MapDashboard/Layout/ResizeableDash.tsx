'use client';

import React, { useState, useRef, useEffect } from 'react'
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"

import SideBox from './Molecules/SideBox'
import MapboxView from './Molecules/MapboxView'

function ResizeableDash() {
  const [sizes, setSizes] = useState<number[]>([25, 75]); // Initial sizes in %
  const [pixelSizes, setPixelSizes] = useState<number[]>([0, 0]); // Store exact pixel values
  const containerRef = useRef<HTMLDivElement | null>(null); // Explicitly type as HTMLDivElement
  const [newMapSize, setNewMapSize] = useState<number>(pixelSizes[1]);

  const debounceTimeout = useRef<NodeJS.Timeout | null>(null); // Store timeout reference

  useEffect(() => {
    if (containerRef.current) {
      const totalWidth = containerRef.current.offsetWidth;
      setPixelSizes(sizes.map(size => Math.round((size / 100) * totalWidth)));
    }
  }, [sizes]);

  useEffect(() => {
    if (debounceTimeout.current) clearTimeout(debounceTimeout.current);

    debounceTimeout.current = setTimeout(() => {
      setNewMapSize(pixelSizes[1]); 
      console.log('s')
    }, 5);

    return () => {
      if (debounceTimeout.current) clearTimeout(debounceTimeout.current);
    };
  }, [pixelSizes]);

  return (
    <div ref={containerRef} className="flex w-full h-full relative">
        <ResizablePanelGroup
          direction="horizontal"
          className="w-full rounded-lg border"
          onLayout={(newSizes) => setSizes(newSizes)} // Track sizes in %
        >
          <ResizablePanel defaultSize={25} maxSize={50} minSize={25}>
            <SideBox />
          </ResizablePanel>
          <div className='relative flex items-center h-full bg-transparent'>
            <ResizableHandle className='absolute rounded-full bg-gray-200 shadow-md h-8 w-4 -right-2 z-40'/>
          </div>
          <ResizablePanel defaultSize={75} id="map">
            <MapboxView mapSize={newMapSize}/>
          </ResizablePanel>
        </ResizablePanelGroup>
    </div>
  )
}

export default ResizeableDash
