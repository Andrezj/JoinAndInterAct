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
        <GeojsonCircles geojson={{ type: "Point", coordinates: [125.74, 39.01] }} />
      </Mapbox>
    </>
  );
}

export default App;
