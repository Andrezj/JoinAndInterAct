import React from 'react';
import Animal from 'react-animals';
import './styles.css';

const UserCardItem = ({ feature }) => {
  const { id, animal, name, description } = feature.properties;

  return (
    <li className='user-card'>
      <div id={`item-${id}`} className='item-content'>
        <h3 className='item-title'>{name}</h3>
        <div className='item-body'>
          <Animal name={`${animal}`} rounded />
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

