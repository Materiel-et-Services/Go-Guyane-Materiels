import React, { useEffect, useRef } from "react";
import {Typography,Box,Grid,Button,Container} from '@mui/material';
import H from "@here/maps-api-for-javascript";


function Map({shopsList}) {
  
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const behaviorRef = useRef(null);


  const initializeMap = (ref) => {
    const platform = new H.service.Platform({
      apikey: import.meta.env.VITE_HERE_KEY
    });
    const layers = platform.createDefaultLayers();
    
    const map = new H.Map(ref, layers.vector.normal.map, {
      pixelRatio: window.devicePixelRatio,
      center: {lat: 0, lng: 0},
      zoom: 2,
    });
  
    mapInstanceRef.current = map;
  
    // SVG markup for the marker icon
    const svgMarkup = '<svg id="Calque_1" width="1.6em" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 167.42 131.24"><defs><style>.cls-1,.cls-3{fill:#003a96;}.cls-1,.cls-2{fill-rule:evenodd;}.cls-2{fill:url(#Dégradé_sans_nom_8);}</style><linearGradient id="Dégradé_sans_nom_8" x1="50.27" y1="65.11" x2="131.31" y2="65.11" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ff0"/><stop offset="0.19" stop-color="#fff500"/><stop offset="0.52" stop-color="#ffdb00"/><stop offset="0.94" stop-color="#ffb100"/><stop offset="1" stop-color="#fa0"/></linearGradient></defs><path class="cls-1" d="M56.42,19h53.15l25.09,43.48L54.94,21.62Z"/><path class="cls-2" d="M53,24.92l78.28,40.17L53.06,105.3l-2.79-4.84L85.45,65.09,50.27,29.69,53,24.92Z"/><path class="cls-1" d="M48.3,33.12l31.77,32L48.29,97,29.85,65.08l18.45-32Z"/><path class="cls-1" d="M134.67,67.65l-25.1,43.47H56.43L55,108.61Z"/><path class="cls-3" d="M116.27,122.86H49.89L16.7,65.37,49.89,7.88h66.38l33.19,57.49Zm-64.83-2.69h63.28l31.63-54.8L114.72,10.58H51.44L19.81,65.37Z"/></svg>';  // Place your SVG markup here
  
    const icon = new H.map.Icon(svgMarkup);
    
    const group = new H.map.Group();
    map.addObject(group);
    
    shopsList.forEach((shop) => {
      const coords = {
        lat: shop.GeoLoc.Latitude,
        lng: shop.GeoLoc.Longitude
      };
      let marker = new H.map.Marker(coords, {icon: icon});
      marker.setData(`<div style="background-color:white">${shop.Title}<br/>${shop.Street}<br/>${shop.City}</div>`); // Set HTML data on the marker
      group.addObject(marker);
    });
  
    // Center the map on the first shop and zoom in
    map.setCenter({lat: shopsList[0].GeoLoc.Latitude, lng: shopsList[0].GeoLoc.Longitude});
    map.setZoom(8, true);
  
    // Enable user interactions with the map
    const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
    behaviorRef.current = behavior;
  
    const ui = H.ui.UI.createDefault(map, layers);
  
  };

  useEffect(() => {
    if (!mapRef.current) return;

    initializeMap(mapRef.current);

    // Cleanup function
    return () => {
      if (behaviorRef.current) {
        behaviorRef.current.dispose();  // Remove event listeners added by the behavior object
      }
      if (mapInstanceRef.current) {
        mapInstanceRef.current.dispose();  // Dispose the map instance
      }
    };
  }, [shopsList]);  // Update the map whenever the list of shops changes

  return (
    <>
   
    <Box 
        sx={{ 
            padding: "50px", 
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center",
            flexDirection: "column"
        }}
    >
        <Box 
            ref={mapRef} 
            sx={{ 
                width: { xs: "100%", md: "600px" }, 
                height: { xs: "300px", md: "500px" },
                backgroundColor: "#e0e0e0", 
                borderRadius: "10px" 
            }}
        />
    </Box>
    </>
)
}

export default Map;