import React, { useState, useEffect, useRef } from "react";
import ReactDom from 'react-dom';
import Popup from '../map_item/popup';
import mapboxgl from "mapbox-gl";
import style from "./basic_main.json";
import mapStyle from './map-style.css';

const MapContext = React.createContext(undefined);

export const useMap = () => React.useContext(MapContext);

function Mapbox(props) {
    const mapRoot = useRef(null);

    const [map, setMap] = React.useState(undefined);
    const [center, setCenter] = useState(undefined);
    const [isMapReady, setIsMapReady] = useState(false);
    
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
            const lng = Math.floor(Math.random() * (1 + 180 - (-180))) -180;
            const lat = Math.floor(Math.random() * (1 + 90 - (-90))) -90;

            setCenter([lng, lat]);
          },
          {
            timeout: 40000,
          }
      )
    }, []);

  
    // Declare a map initialization effect
    React.useLayoutEffect(() => {

      if(center !== undefined) {

        const mapObj = new mapboxgl.Map({
          container: mapRoot.current,
          style: style,
          center: center,
          zoom: 11,
        })
    
        // We need to wait for 'load' event
        if (map !== undefined) {
          map.remove();
        }
        mapObj.on("load", setMap(mapObj))
        
        if (map !== undefined) {
          setIsMapReady(true)
          return () => {
            map.remove();
          }
        }
      }
    }, [center])

    useEffect(() => {

    }, [isMapReady])
  
    return (
      <div ref={mapRoot} className="map-container" /* style={{ height: "400px", margin: "20px 0" }} */>
        {map !== undefined &&  (
          <MapContext.Provider value={map}>{props.children}</MapContext.Provider>
        )}
      </div>
    )
  }

  export default Mapbox