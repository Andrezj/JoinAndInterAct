import React from 'react';
import Animal from "react-animals";

const Popup = ({ feature }) => {
  const { id, name, description } = feature.properties;

  return (
    <div id={`popup-${id}`}>
      <h3>{name}</h3>
      <Animal />
      {description}
    </div>
  );
};

export default Popup;
