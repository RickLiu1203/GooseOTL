"use client";

import { useRef, useEffect } from "react";
import { useSidebarContext } from "../../../../providers/SidebarProvider"; // ✅ Use SidebarContext instead of FocusContext
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { adjustPitchOnZoom, flyIn, flyOut } from "../../../../helpers/mapHelper";
import Logo from "../Atoms/Logo";
import Github from "../Atoms/Github";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_KEY || "";

interface Props {
  mapSize: number;
}

function MapboxView({ mapSize }: Props) {
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const { state, focusedId } = useSidebarContext(); // ✅ Use SidebarContext

  useEffect(() => {
    if (mapContainerRef.current && !mapRef.current) {
      mapRef.current = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: "mapbox://styles/rickliu1203/cm3919cmp009401o1cd30dgfd?optimize=true",
        center: [-80.537331184, 43.467998128],
        zoom: 10,
        trackResize: true,
      });

      mapRef.current.addControl(new mapboxgl.NavigationControl());

      mapRef.current.on("load", () => {
        adjustPitchOnZoom(mapRef.current);
      });
    }
  }, []);

  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    map.resize();
  }, [mapSize]); // ✅ Ensure map resizes when the layout changes

  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    setTimeout(() => {
      if (state === "focused" && focusedId !== null) {
        flyIn({ map, longitude: -79.3958, latitude: 43.6635 }); // ✅ Adjust to fly to the focused school
      } else {
        flyOut(map);
      }
    }, 600);
  }, [state, focusedId]); // ✅ Updated dependency to track sidebar state

  return (
    <div className="relative w-full h-screen">
      <div
        id="map-container"
        className="flex flex-grow h-full w-full bg-[#041629] relative"
        ref={mapContainerRef}
      />
      <div className="flex h-full flex-col absolute left-4 top-6 gap-3">
        <Logo />
        <Github />
      </div>
    </div>
  );
}

export default MapboxView;
