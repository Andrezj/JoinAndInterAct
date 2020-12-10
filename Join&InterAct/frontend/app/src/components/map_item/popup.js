import React from 'react';
import Animal from "react-animals";

import './styles.css';

const Popup = ({ feature }) => {
  const { id, animal, name, description } = feature.properties;

  return (
    <div id={`popup-${id}`} className='popup-content'>
      <h3 className='popup-title'>{name}</h3>
      <Animal name={`${ animal }`} dance />
      <div className='popup-description'>{description}</div>
      <footer className='footer-links'>
        <a href={`message/${id}`} >Send a message</a>
        <a href='list'>See in a list</a>
      </footer>
    </div>
  );
};

export default Popup;
