import React from 'react';
import Animal from "react-animals";

const Popup = ({ feature }) => {
  const { id, animal, name, description } = feature.properties;

  return (
    <div id={`popup-${id}`}>
      <h3>{name}</h3>
      <Animal name={`${ animal }`} dance />
      {description}
    </div>
  );
};

export default Popup;
