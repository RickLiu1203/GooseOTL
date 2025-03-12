'use client';

import { useRef, useEffect } from 'react';
import { useFocusContext } from '../../providers/FocusProvider';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import {adjustPadding, adjustPitchOnZoom, flyIn, flyOut} from '../../helpers/mapHelper'

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_KEY || '';

function MapboxView() {
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const { focused } = useFocusContext();

  useEffect(() => {
    if (mapContainerRef.current && !mapRef.current) {
      mapRef.current = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/rickliu1203/cm3919cmp009401o1cd30dgfd?optimize=true',
        center: [-80.537331184, 43.467998128],
        zoom: 16,
      });

      mapRef.current.addControl(new mapboxgl.NavigationControl());

      mapRef.current.on('load', () => {
        console.log("Map style has loaded.");
        adjustPitchOnZoom(mapRef.current);
      });
    }
  }, []);

  useEffect(() => {
    const map = mapRef.current;
    const containerWidth: number = mapContainerRef.current?.offsetWidth || 0;
    const padding: number = focused ? containerWidth * 0.1 : 0;

    adjustPadding({map, padding})

    setTimeout(() => {
      if (focused) {
        flyIn({map, longitude: -79.3958, latitude: 43.6635});
      } else {
        flyOut(map)
      }
    }, 600);
    
  }, [focused]);

  return (
    <div
      id="map-container"
      className="flex flex-grow h-full bg-[#041629] relative rounded-r-2xl"
      ref={mapContainerRef}
    />
  );
}

export default MapboxView;
