import React, { useState, useEffect, useRef } from "react";
import ReactDOM from 'react-dom';
import mapboxgl from "mapbox-gl";
import { useMap } from "../map/mapBox";
import fetchFakeData from "../map/fetchFakeData";
import Popup from './popup';

const popupContext = React.createContext(undefined);

export const usePopup = () => React.useContext(popupContext);

function GeojsonCircles(props) {
  // Getting map from context
  const map = useMap();
  var markerHeight = 50, markerRadius = 10, linearOffset = 25;
  var popupOffsets = {
    'top': [0, 0],
    'top-left': [0,0],
    'top-right': [0,0],
    'bottom': [0, -markerHeight],
    'bottom-left': [linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
    'bottom-right': [-linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
    'left': [markerRadius, (markerHeight - markerRadius) * -1],
    'right': [-markerRadius, (markerHeight - markerRadius) * -1]
  };
  const popUpRef = useRef(new mapboxgl.Popup({ anchor: 'bottom', offset: popupOffsets }));
  const [popup, setPopup] = useState(undefined);
  const center = map.getCenter();

  const len = props.geojson.features.length;
  const newId = String(len)
  const centerGeoJson = {
    id: newId,
    type: 'Feature',
    geometry: { type: "Point", coordinates: [center.lng, center.lat] }
  };
  /* props.geojson.features.push(centerGeoJson); */
  useEffect(() => {
  }, []);

  // Defining data source and layer
  React.useEffect(() => {
    map.addSource("red-circle-source", {
      type: "geojson",
      // By default we're using just an empty geojson
      data: {
        type: "FeatureCollection",
        features: [],
      },
    })
    map.addLayer({
      id: "red-circle-layer",
      type: "circle",
      source: "red-circle-source",
      paint: {
        "circle-color": "red",
      },
    });
    map.addSource("blue-circle-source", {
      type: "geojson",
      // By default we're using just an empty geojson
      data: {
        type: "FeatureCollection",
        features: [],
      },
    })
    map.addLayer({
      id: "blue-circle-layer",
      type: "circle",
      source: "blue-circle-source",
      paint: {
        "circle-color": "blue",
      },
    });


    return () => {
      map.removeLayer("red-circle-layer")
      map.removeSource("red-circle-source")
      map.removeLayer("blue-circle-layer")
      map.removeSource("blue-circle-source")
    }
  }, []);

  /* map.on('click', 'red-circle-layer', e => {
    map.getCanvas().style.cursor = 'pointer';
    var popup = new mapboxgl.Popup({ closeOnClick: false })
      .setLngLat([-96, 37.8])
      .setHTML('<h1>Hello World!</h1>')
      .addTo(map);
    if (e.features.length) {
      const feature = e.features[0];
      // create popup node
      const popupNode = document.createElement('div');
            //ReactDOM.render(<Popup feature={feature} />, popupNode);
            // set popup on map
      popUpRef.current.setLngLat(feature.geometry.coordinates).setDOMContent(popupNode).addTo(map);
    }
  }); */

  /* var popup = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false
  }); */

  map.on('mouseenter', 'red-circle-layer', function (e) {
    if (map.queryRenderedFeatures(e.point).filter(feature => feature.source !== 'circle-source').length === 0) {
      console.log();
    }
    // Change the cursor style as a UI indicator.
    map.getCanvas().style.cursor = 'pointer';

    var coordinates = e.features[0].geometry.coordinates.slice();
    var description = e.features[0].properties.description;
    var id = e.features[0].properties.id;

    // Ensure that if the map is zoomed out such that multiple
    // copies of the feature are visible, the popup appears
    // over the copy being pointed to.
    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
      coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }

    const feature = e.features[0];

    const popupNode = document.createElement('div');
    ReactDOM.render(<Popup feature={feature} />, popupNode);
    popUpRef.current.setLngLat(e.lngLat).setDOMContent(popupNode).addTo(map);

    /* const newPopup = new mapboxgl.Popup()
      .setLngLat(e.lngLat)
      .addTo(map); */

    // create popup node
    /* setPopup(newPopup);
    const canvas = map.getCanvas();
    const node = document.getElementsByClassName('bananinha'); */
    /* if (e) {
      canvas.style.cursor = 'pointer';
      node.textContent = e.features[0].properties.title;
      node.style.left = `${e.originalEvent.clientX}px`;
      node.style.top = `${e.originalEvent.clientY}px`;
      node.style.display = 'block'; */
      /* popUpRef.current.trackPointer(); */
    /* } else {
      canvas.style.cursor = '';
      node.style.display = 'none';
      node.textContent = '';
    } */
    e.preventDefault();
  });

  map.on('mouseleave', 'red-circle-layer', function () {
    map.getCanvas().style.cursor = '';
  });


  // Updating data
  React.useEffect(async () => {
    async function loadDots() {
      const results = await fetchFakeData(center);
      map.getSource("blue-circle-source").setData(centerGeoJson);
      map.getSource("red-circle-source").setData(results);
    }
    loadDots();
  }, [props.geojson.features]);

  return (null);
}

export default GeojsonCircles