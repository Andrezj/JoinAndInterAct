import React, { useState } from 'react';
import Animal from 'react-animals';
import './styles.css';

const UserCardItem = ({ feature }) => {
  const { id, animal, name, description } = feature.properties;
  const [animate, setAnimate] = useState(false)

  const handleHover = () => {
    setAnimate(true);
  }

  const handleLeave = () => {
    setAnimate(false);
  }

  return (
    <li className='user-card'>
      <div id={`item-${id}`} className='item-content' onMouseOver={handleHover} onMouseLeave={handleLeave}>
        <h4 className='item-title'>{name}</h4>
        <div className='item-body'>
          <Animal name={`${animal}`} rounded dance={animate}/>
          <div className='item-description'>{description}</div>
        </div>
        <footer className='footer-links'>
          <a href={`message/${id}`} >Send a message</a>
          <a href='/'>See on map</a>
        </footer>
      </div>
    </li>
  );
};

export default UserCardItem;

