// Helper functions for map functionalities

interface CoordinateInterface {
    map: mapboxgl.Map | null;
    latitude: number;
    longitude: number;
}

interface MapPaddingInterface{
    map: mapboxgl.Map | null;
    padding: number;
}

// Controls flying into a location
export const flyIn = ({map, latitude, longitude}: CoordinateInterface) => {
    if(map){
        const endBearing = 45; // The bearing at the end of flyTo
        map.flyTo({
            center: [longitude, latitude],
            zoom: 16,
            speed: 0.5,
            essential: true,
            pitch: 60,
            bearing: endBearing
        });

        // const onMoveEnd = () => {
        //   setTimeout(() => {
        //     rotateCamera({map, latitude, longitude, initialBearing: endBearing});
        //     map.off('moveend', onMoveEnd);
        //   }, 2000);
        // };

        // map.on('moveend', onMoveEnd);
    }
}

// Controls flying out of a location
export const flyOut = (map: mapboxgl.Map | null) => {
    if(map){
        map.flyTo({
            zoom: 3,
            duration: 8000,
            essential: true,
            pitch: 0,
            bearing: 0
          });
    }
}

// Controls padding when map container expands/shrinks
export const adjustPadding = ({map, padding}: MapPaddingInterface) => {
    if(map){
        map.flyTo({
            padding: {
              left: 0,
              right: padding,
              top: 0,
              bottom: 0,
            },
            duration: 500,
          });
    }
}

// Controls camera rotation around a specified coordinate
// const rotateCamera = ({map, latitude, longitude, initialBearing}: CoordinateInterface & {initialBearing: number}) => {
//     let lastTime = 0;
//     let isRotating = true;
//     let animationFrameId: number;
    
//     const stopRotation = () => {
//       isRotating = false; 
//       if (animationFrameId) {
//         cancelAnimationFrame(animationFrameId);
//       }
//   };

//     const animate: FrameRequestCallback = (timestamp: number) => {
//       if (map && isRotating) {
//         if (lastTime === 0) {
//           lastTime = timestamp;
//           map.setBearing(initialBearing);
//         }

//         const deltaTime = timestamp - lastTime;
//         lastTime = timestamp;

//         const currentBearing = map.getBearing();
//         const newBearing = (currentBearing - deltaTime / 250) % 360;

//         map.easeTo({
//           bearing: newBearing,
//           duration: 0,
//           easing: (t) => t,
//           around: [longitude, latitude]
//         });

//         map.on('mousedown', stopRotation);
//         map.on('touchstart', stopRotation);
//         map.on('dragstart', stopRotation);
//         map.on('wheel', stopRotation)

//         animationFrameId = requestAnimationFrame(animate);
//       }
//     };
//     animationFrameId = requestAnimationFrame(animate);
// }; 

// Controls reverting pitch when scrolling out
export const adjustPitchOnZoom = (map: mapboxgl.Map | null) => {
  if (!map) return;

  let lastPitch = -1; // Store the last applied pitch
  let zoomTimeout: NodeJS.Timeout | null = null; // Timeout to delay pitch change

  map.on('zoom', () => {
      const currentZoom = map.getZoom();
      const thresholdZoom = 14; // Define zoom threshold
      const pitchedAngle = 60; // Target pitch when zoomed in
      const normalAngle = 0; // Default pitch when zoomed out

      const newPitch = currentZoom > thresholdZoom ? pitchedAngle : normalAngle;

      // If the pitch is already at the desired state, do nothing
      if (newPitch === lastPitch) return;

      // Clear any previous timeout
      if (zoomTimeout) clearTimeout(zoomTimeout);

      zoomTimeout = setTimeout(() => {
          lastPitch = newPitch; // Update the stored pitch

          map.easeTo({
              pitch: newPitch,
              duration: 500, // Smooth transition
              easing: (t) => t,
          });

          console.log(`Pitch transition triggered to: ${newPitch} at zoom level: ${currentZoom}`);
      }, 500);
  });
};





  