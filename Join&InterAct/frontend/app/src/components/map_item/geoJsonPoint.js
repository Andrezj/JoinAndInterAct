import React, { useState, useEffect, useRef } from "react";
import ReactDOM from 'react-dom';
import mapboxgl from "mapbox-gl";
import { useMap } from "../map/mapBox";
import fetchFakeData from "../../utils/fetchFakeData";
import Popup from './popup';

const popupContext = React.createContext(undefined);

export const usePopup = () => React.useContext(popupContext);

function GeojsonCircles(props) {
  // Getting map from context
  const map = useMap();
  var markerHeight = 15, markerRadius = 10, linearOffset = 25;
  var popupOffsets = {
    'top': [0, 0],
    'top-left': [0, 0],
    'top-right': [0, 0],
    'bottom': [0, -markerHeight],
    'bottom-left': [linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
    'bottom-right': [-linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
    'left': [markerRadius, (markerHeight - markerRadius) * -1],
    'right': [-markerRadius, (markerHeight - markerRadius) * -1]
  };
  const popUpRef = useRef(new mapboxgl.Popup({ anchor: 'bottom', offset: popupOffsets }));
  const center = map.getCenter();
  console.log(center);

  const len = props.geojson.features.length;
  const newId = String(len)
  const centerGeoJson = {
    id: newId,
    type: 'Feature',
    geometry: { type: "Point", coordinates: [center.lng, center.lat] }
  };
  /* props.geojson.features.push(centerGeoJson); */

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

  const node = document.createElement('div');
  var lastXCoord = undefined;
  var lastYCoord = undefined;
  var lastPos = undefined;
  var lastFeature = undefined;

  React.useLayoutEffect(() => {
    function popup(e) {
      // Change the cursor style as a UI indicator.
      const canvas = map.getCanvas();
      if (e !== undefined && e.features[0] !== lastFeature) {
        lastFeature = e.features[0];
        canvas.style.cursor = 'pointer';
        ReactDOM.render(<Popup feature={e.features[0]} />, node);
        popUpRef.current.setLngLat(e.lngLat).setDOMContent(node).addTo(map);
        popUpRef.current.trackPointer();
        lastPos = e.lngLat;
        /* node.style.left = `${e.originalEvent.clientX}px`;
        node.style.top = `${e.originalEvent.clientY}px`; */
        /* node.style.display = 'block';
        lastXCoord = `${e.originalEvent.clientX}px`;
        lastYCoord = `${e.originalEvent.clientY}px`; */
      } else {
        canvas.style.cursor = '';
        popUpRef.current.setLngLat(lastPos);
      }
    };

    map.on('mouseenter', 'red-circle-layer', event => popup(event));
    map.on('mouseleave', 'red-circle-layer', () => popup());
  });

  // Updating data
  React.useEffect(() => {
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