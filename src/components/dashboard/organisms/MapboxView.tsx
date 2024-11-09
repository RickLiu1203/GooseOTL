'use client';

import { useRef, useEffect } from 'react';
import { useFocusContext } from '../../../providers/FocusProvider';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';


mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_KEY || '';

function MapboxView() {
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const { focused } = useFocusContext();

  useEffect(() => {
    if (mapContainerRef.current && !mapRef.current) {
      mapRef.current = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/rickliu1203/cm3919cmp009401o1cd30dgfd',
        center: [0, 0],
        zoom: 2,
      });
    }
  }, []);

  useEffect(() => {
    const map = mapRef.current;
    const containerWidth = mapContainerRef.current?.offsetWidth || 0;

    const paddingRight = focused ? containerWidth * 0.15 : 0;

    if (map) {
        map.easeTo({
            padding: {
            left: 0,
            right: paddingRight,
            top: 0,
            bottom: 0,
            },
            duration: 300,
        });
        setTimeout(() => {
            if (focused) {
                map.flyTo({ center: [123, 0], zoom: 9, speed: 1 });
              } else {
                map.flyTo({ zoom: 2.2, speed: 1 });
              }
        }, 300);
    }
  }, [focused]);

  return (
    <div
      id="map-container"
      className="flex flex-grow h-full bg-[#041629] relative"
      ref={mapContainerRef}
    />

  );
}

export default MapboxView;
