import React, { useEffect } from "react"
import { useMap } from "../map/mapBox"
import fetchFakeData from "../map/fetchFakeData"

function GeojsonCircles(props) {
  // Getting map from context
  const map = useMap()
  const center = map.getCenter();
  console.log(center);
  const centerGeoJson = {
    type: 'Feature' ,
    geometry: {type: "Point", coordinates: [center.lng, center.lat]}
  };
  const { lng, lat } = center;

  useEffect(() => {
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