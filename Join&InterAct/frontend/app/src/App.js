import './global.css';

import MainNavBar from './components/top_main_navbar';
import HeaderForm from './components/header_form';
import MapHeader from './components/map_header';
import Mapbox from './components/map/mapBox';
import GeojsonCircles from './components/map_item/geoJsonPoint';

function App() {
  return (
    <>
      <MainNavBar />
      <HeaderForm />
      <MapHeader />
      <Mapbox>
        <ul>
          <GeojsonCircles geojson={
            { 
              type: 'FeatureCollection',
              features: [
                {
                  type: 'Feature' ,
                  geometry: {type: "Point", coordinates: [125.74, 39.01]}
                },
                {
                  type: 'Feature' ,
                  geometry: {type: "Point", coordinates: [120.74, 30.01]}
                },
                {
                  type: 'Feature' ,
                  geometry: {type: "Point", coordinates: [125.54, 38.91]}
                },
                {
                  type: 'Feature' ,
                  geometry: {type: "Point", coordinates: [122.74, 40.01]}
                },
              ]
            }} />
          {/* <GeojsonCircles geojson={{ id: "2", type: "Point", coordinates: [120.74, 36.01] }} /> */}
        </ul>
      </Mapbox>
    </>
  );
}

export default App;
