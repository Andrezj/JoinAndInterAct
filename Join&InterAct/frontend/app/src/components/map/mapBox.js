import React from "react"
import mapboxgl from "mapbox-gl"
import style from "./basic_main.json"
import fetchFakeData from "./fetchFakeData"

const MapContext = React.createContext(undefined)

export const useMap = () => React.useContext(MapContext)

function Mapbox(props) {
    const mapRoot = React.useRef(undefined)
    const [map, setMap] = React.useState(undefined)
  
    // Declare a map initialization effect
    React.useEffect(() => {
      const mapObj = new mapboxgl.Map({
        container: mapRoot.current,
        style: style,
        center: [125.744496, 39.010425],
        zoom: 13,
      })
  
      // We need to wait for 'load' event
      mapObj.on("load", setMap(mapObj))
    }, [])
  
    return (
      <div ref={mapRoot} style={{ height: "400px", margin: "20px 0" }}>
        {map !== undefined && (
          <MapContext.Provider value={map}>{props.children}</MapContext.Provider>
        )}
      </div>
    )
  }

  export default Mapbox