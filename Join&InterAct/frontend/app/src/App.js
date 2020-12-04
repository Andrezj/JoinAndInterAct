import './global.css';

import MainNavBar from './components/top_main_navbar';
import HeaderForm from './components/header_form';
import MapHeader from './components/map_header';
import Mapbox from './components/map/mapBox';
import GeojsonCircles from './components/map_item/geoJsonPoint';
import Popup from './components/map_item/popup';

function App() {
  return (
    <>
      <MainNavBar />
      <HeaderForm />
      <MapHeader />
      <Mapbox>
        <GeojsonCircles geojson={
          { 
            type: 'FeatureCollection',
            features: [
              {
                id : '1',
                type: 'Feature' ,
                geometry: {type: "Point", coordinates: [125.74, 39.01]}
              },
              {
                id : '3',
                type: 'Feature' ,
                geometry: {type: "Point", coordinates: [125.54, 38.91]}
              },
              {
                id : '4',
                type: 'Feature' ,
                geometry: {type: "Point", coordinates: [122.74, 40.01]}
              },
            ]
          }}>
          </GeojsonCircles>
      </Mapbox>
    </>
  );
}

export default App;
