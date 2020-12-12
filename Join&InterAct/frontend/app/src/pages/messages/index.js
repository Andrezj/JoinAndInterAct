import React, { useState, useEffect } from 'react';

import './main.css';
import './aside.css';

import Animal from 'react-animals';
import Conversation from '../../components/conversation';
import ProfileInfo from '../../components/side_profile_info';

function Messages() {
  return (
    <div>
      <aside>
        <strong>Your profile</strong>
        <div className='profile-head'>
          <Animal size="100px" />
          <div className='short-desc'>Some cool description</div>
        </div>
        <ProfileInfo />
      </aside>
      <main>
        <ul>
          {/* {users.features.map(feature => (
            <UserCardItem key={feature._id} feature={feature} />
          ))} */}
        </ul>
        <Conversation />
      </main>
    </div>
  )
}

export default Messages;