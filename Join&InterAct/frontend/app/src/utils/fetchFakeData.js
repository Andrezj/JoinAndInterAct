const fetchFakeData = centerCoordinates => {
    const newFeaturesList = [];
    for (let i = 0; i < 15; i++) {
      const id = i;
      const centerPoint = getRandomCoordinate(centerCoordinates);
      const animal = getRandomAnimal()[0];
      const msg = getRandomAnimal()[1];
      newFeaturesList.push({
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: centerPoint,
        },
        properties: {
          id,
          animal,
          msg,
          name: `Random ${animal}`,
          description: `A random ${animal} ${msg}`,
        },
      });
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

  const animalsList = ['alligator', 'anteater', 'armadillo', 'aurochs', 'axolotl', 'badger', 'bat', 'beaver', 'buffalo', 'camel',
     'capybara', 'chameleon', 'cheetah', 'chinchilla', 'chipmunk', 'chupacabra', 'cormorant', 'coyote', 'crow', 'dingo', 'dinosaur',
     'duck', 'elephant', 'ferret', 'fox', 'frog', 'giraffe', 'gopher', 'grizzly', 'hedgehog', 'hippo', 'hyena', 'ibex', 'ifrit', 'iguana',
     'jackal', 'jackalope', 'kangaroo', 'koala', 'kraken', 'leopard', 'lemur', 'liger', 'loris', 'manatee', 'mink', 'monkey', 'moose', 'narwhal',
     'nyan cat', 'orangutan', 'otter', 'panda', 'penguin', 'platypus', 'pumpkin', 'python', 'quagga', 'rabbit', 'raccoon', 'rhino', 'sheep', 'shrew',
     'skunk', 'squirrel', 'tiger', 'turtle', 'walrus', 'wolf', 'wolverine', 'wombat'];
  const msgs = ['is near', 'is nearby', 'was found', 'is around', 'appeared', 'crossed your way']

  const getRandomAnimal = () =>{
    const i = Math.floor(Math.random() * animalsList.length);
    var animalName = animalsList[i];
    const d = Math.ceil(animalsList.length / msgs.length);
    const j = Math.floor(i / d);
    const msg = msgs[j]
    animalName = animalName.charAt(0).toUpperCase() + animalName.slice(1);
    return [animalName, msg];
  }
  
  export default fetchFakeData;