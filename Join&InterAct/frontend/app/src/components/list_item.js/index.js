import React from 'react';
import './styles.css';

const UserCardItem = ({ feature }) => {
  const { id, animal, name, description } = feature.properties;

  return (
    <li className='user-card'>
      <div id={`item-${id}`} className='item-content'>
        <h3 className='item-title'>{name}</h3>
        <Animal name={`${animal}`} dance />
        <div className='item-description'>{description}</div>
        <footer className='footer-links'>
          <a href={`message/${id}`} >Send a message</a>
        </footer>
      </div>
    </li>
  );
};

export default UserCardItem;

