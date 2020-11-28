import './global.css';

import MainNavBar from './components/top_main_navbar';
import HeaderForm from './components/header_form';
import MapHeader from './components/map_header';
import Mapbox from './components/map/mapBox';

function App() {
  return (
    <>
      <MainNavBar />
      <HeaderForm />
      <MapHeader />
      <Mapbox />
    </>
  );
}

export default App;
