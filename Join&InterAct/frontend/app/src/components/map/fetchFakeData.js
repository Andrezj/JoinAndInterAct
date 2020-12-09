const fetchFakeData = centerCoordinates => {
    const newFeaturesList = [];
    for (let i = 0; i < 15; i++) {
      const id = i;
      const centerPoint = getRandomCoordinate(centerCoordinates);
      newFeaturesList.push({
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: centerPoint,
        },
        properties: {
          id,
          name: `Random Point #${id}`,
          description: `description for Random Point #${id}`,
        },
      });
      console.log(newFeaturesList[i].properties.id)
    }
  
    return Promise.resolve({
      type: 'FeatureCollection',
      features: newFeaturesList,
    });
  };
  
  /**
   * Generates a random point within 0.025 radius of map center coordinates.
   */
  const getRandomCoordinate = (center) => {
    const centerLon = center.lng;
    const centerLat = center.lat;
    const r = 0.05 * Math.sqrt(Math.random());
    const theta = Math.random() * 2 * Math.PI;
    const latitude = centerLat + r * Math.cos(theta);
    const longitude = centerLon + r * Math.sin(theta);
    return [longitude, latitude];
  };
  
  export default fetchFakeData;