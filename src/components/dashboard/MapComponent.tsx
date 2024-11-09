'use client';

import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// Map container style
const containerStyle = {
  width: "100%",
  height: "100%"
};

// Center of the map (Dublin, Ireland in this example)
const center = {
  lat: 53.333061140,
  lng: -6.248905682,
};

const MapComponent = () => {
  const googleMapsApiKey = process.env.NEXT_PUBLIC_MAPS_KEY || '';
  console.log(googleMapsApiKey)

  return (
    <div className="w-3/4 h-full">
      <LoadScript googleMapsApiKey={googleMapsApiKey}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
          >
          {/* Marker at the center */}
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default MapComponent;