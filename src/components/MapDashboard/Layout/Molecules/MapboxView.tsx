'use client';

import { useRef, useEffect } from 'react';
import { useFocusContext } from '../../../../providers/FocusProvider';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import {adjustPitchOnZoom, flyIn, flyOut} from '../../../../helpers/mapHelper'
import Logo from '../Atoms/Logo';
import Github from '../Atoms/Github';

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_KEY || '';

interface Props{
  mapSize: number;
}

function MapboxView({mapSize}: Props) {
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const { focused } = useFocusContext();

  useEffect(() => {
    if (mapContainerRef.current && !mapRef.current) {
      mapRef.current = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/rickliu1203/cm3919cmp009401o1cd30dgfd?optimize=true',
        center: [-80.537331184, 43.467998128],
        zoom: 10,
        trackResize: true
      });

      mapRef.current.addControl(new mapboxgl.NavigationControl());

      mapRef.current.on('load', () => {
        adjustPitchOnZoom(mapRef.current);
      });
    }
  }, []);

  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    map.resize();
  }, [mapSize]); // Runs whenever `mapSize` changes

  useEffect(() => {
    const map = mapRef.current;

    setTimeout(() => {
      if (focused) {
        flyIn({map, longitude: -79.3958, latitude: 43.6635});
      } else {
        flyOut(map)
      }
    }, 600);
    
  }, [focused]);

  return (
    <div className='relative w-full h-full'>
      <div
      id="map-container"
      className="flex flex-grow h-full w-full bg-[#041629] relative"
      ref={mapContainerRef}
      />
      <div className='flex h-full flex-col absolute left-4 top-6 gap-3'>
        <Logo />
        <Github />
      </div>
    </div>

  );
}

export default MapboxView;
