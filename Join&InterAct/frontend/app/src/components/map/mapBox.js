import React, { useState, useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import style from "./basic_main.json";

const MapContext = React.createContext(undefined)

export const useMap = () => React.useContext(MapContext)


function Mapbox(props) {
    const mapRoot = useRef(null);
    const [map, setMap] = React.useState(undefined);
    const [center, setCenter] = useState(undefined);
    
    useEffect(() => {
      navigator.geolocation.getCurrentPosition(
          (pos) => {
  
            const coords = [
              pos.coords.longitude,
              pos.coords.latitude
            ];

            setCenter(coords);
          },
          (err) => {
            console.log(err);
          },
          {
            timeout: 40000,
          }
      )
    }, []);

  
    // Declare a map initialization effect
    React.useEffect(() => {

      if(center !== undefined) {

        const mapObj = new mapboxgl.Map({
          container: mapRoot.current,
          style: style,
          center: center,
          zoom: 11,
        })
    
        // We need to wait for 'load' event
        mapObj.on("load", setMap(mapObj))

        if (map !== undefined)
          return () => map.remove();
      }
    }, [center])
  
    return (
      <div ref={mapRoot} style={{ height: "400px", margin: "20px 0" }}>
        {map !== undefined && (
          <MapContext.Provider value={map}>{props.children}</MapContext.Provider>
        )}
      </div>
    )
  }

  export default Mapbox