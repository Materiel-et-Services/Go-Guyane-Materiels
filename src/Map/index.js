import React,{useEffect,useState,useRef} from "react";
import H from "@here/maps-api-for-javascript";

import {Typography,Box,Grid,Button,Container} from '@mui/material';
import { maxHeight, width } from "@mui/system";


function Map ({shop,shopsList}) {

    var svgMarkup = '<svg id="Calque_1" width="25px" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 167.42 131.24"><defs><style>.cls-1,.cls-3{fill:#003a96;}.cls-1,.cls-2{fill-rule:evenodd;}.cls-2{fill:url(#Dégradé_sans_nom_8);}</style><linearGradient id="Dégradé_sans_nom_8" x1="50.27" y1="65.11" x2="131.31" y2="65.11" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ff0"/><stop offset="0.19" stop-color="#fff500"/><stop offset="0.52" stop-color="#ffdb00"/><stop offset="0.94" stop-color="#ffb100"/><stop offset="1" stop-color="#fa0"/></linearGradient></defs><path class="cls-1" d="M56.42,19h53.15l25.09,43.48L54.94,21.62Z"/><path class="cls-2" d="M53,24.92l78.28,40.17L53.06,105.3l-2.79-4.84L85.45,65.09,50.27,29.69,53,24.92Z"/><path class="cls-1" d="M48.3,33.12l31.77,32L48.29,97,29.85,65.08l18.45-32Z"/><path class="cls-1" d="M134.67,67.65l-25.1,43.47H56.43L55,108.61Z"/><path class="cls-3" d="M116.27,122.86H49.89L16.7,65.37,49.89,7.88h66.38l33.19,57.49Zm-64.83-2.69h63.28l31.63-54.8L114.72,10.58H51.44L19.81,65.37Z"/></svg>';

    

    const [map,setMap] = useState(null);

    const testRef = React.useRef(null)

    useEffect(() => {
       
        if (!testRef.current) return;
        
        const H = window.H
           const platform = new H.service.Platform({
            apikey: process.env.REACT_APP_HERE_KEY
           })
           const layers = platform.createDefaultLayers();

        //    console.log(layers)

        //    console.log(HereMaps)

           var icon = new H.map.Icon(svgMarkup)
           
           let geos = shopsList.map((shopElement) => {
                return [{
                    lat: shopElement.GeoLoc.Latitude,
                    lng: shopElement.GeoLoc.Longitude,
                },{icon:icon}]
           })

        //    "Latitude":5.156557083129883,"Longitude":-52.66756820678711
        //    geos = geos.map((
            //[new H.map.Marker(coords,{icon:icon}),new H.map.Marker(coords2,{icon:icon})
        //    ))
           var markers = geos.map((element) => {
            return new H.map.Marker(element[0],element[1])
        })



           const newMaps = new H.Map(
            testRef.current,
            layers.vector.normal.map,
        {
          pixelRatio: window.devicePixelRatio,
          center: {lat: 0, lng: 0},
          zoom: 2
        },
           )

        //    newMaps.addObject(marker)
        newMaps.addObjects(markers)

           newMaps.setCenter(geos[0][0])
           newMaps.setZoom(8,true)

           const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(newMaps));

                const ui = H.ui.UI.createDefault(newMaps, layers);
                return () => {
                    newMaps.dispose();
                  };
        // setMap(newMaps);
        // }
    },[testRef])
    
    return (
    <div style={{padding:"50px"}}>  
    <div   style={{ width: '300px', height:'300px', margin:"auto" }}  ref={testRef}></div>
    </div>  
   
      
    
    )
}

export default Map;
