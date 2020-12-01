import React, { useEffect, useRef } from "react";
import ReactDOM from 'react-dom';
import mapboxgl from "mapbox-gl";
import { useMap } from "../map/mapBox";
import fetchFakeData from "../map/fetchFakeData";
import popUpRef from './popup';

function GeojsonCircles(props) {
  // Getting map from context
  const map = useMap();
  const popUpRef = useRef(new mapboxgl.Popup({ offset: 15 }));
  const center = map.getCenter();
  console.log(center);
  const { lng, lat } = center;

  useEffect(() => {
    const len = props.geojson.features.length;
    const newId = String(len)
    const centerGeoJson = {
    id: newId,
    type: 'Feature' ,
    geometry: {type: "Point", coordinates: [center.lng, center.lat]}
  };
    props.geojson.features.push(centerGeoJson);
  }, []);

  // Defining data source and layer
  React.useEffect(() => {
    map.addSource("circle-source", {
      type: "geojson",
      // By default we're using just an empty geojson
      data: {
        type: "FeatureCollection",
        features: [],
      },
    })
    map.addLayer({
      id: "circle-layer",
      type: "circle",
      source: "circle-source",
      paint: {
        "circle-color": "red",
      },
    });


    return () => {
      map.removeLayer("circle-layer")
      map.removeSource("circle-source")
    }
  }, []);

  /* map.on('click', 'circle-layer', e => {
    if (e.features.length) {
      const feature = e.features[0];
      // create popup node
      const popupNode = document.createElement('div');
      ReactDOM.render(<Popup feature={feature} />, popupNode);
      // set popup on map
      popUpRef.current.setLngLat(feature.geometry.coordinates).setDOMContent(popupNode).addTo(map);
    }
  }); */
  

  // Updating data
  React.useEffect(async () => {
    async function loadDots() {
      const results = await fetchFakeData(lng, lat);
      console.log(results);
      map.getSource("circle-source").setData(props.geojson);
    }
    loadDots();
  }, [props.geojson.features]);

  return null
}

export default GeojsonCircles