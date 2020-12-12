import React, { useState, useEffect } from 'react';
import fetchFakeMessages from '../../utils/fetchFakeMessages';

import './styles.css';


function Conversation(feature) {

  const [messages, setmessages] = useState([]);

  useEffect(() => {
    async function loadMesages() {
      await fetchFakeMessages().then(data => {
        setmessages(data);
      });
    }
    loadMesages();
  }, []);

  return (
    <div className='messages'>
      <ul>
        {
          messages.map(message => (
            <div>
              <div className='message-container'
                style={{ textAlign: `${message.source ? 'left' : 'right'}` }}
              >
                <div className='message-content'
                >{message.message}</div>
              </div>
              
            </div>
          ))
        }
      </ul>
    </div>
  )
}

export default Conversation;