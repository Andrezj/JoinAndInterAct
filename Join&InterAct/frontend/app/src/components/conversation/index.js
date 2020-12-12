import React, { useState, useEffect } from 'react';
import fetchFakeMessages from '../../utils/fetchFakeMessages';

import './styles.css';


function Conversation(feature) {

  const [messages, setmessages] = useState([]);
  const [newMessage, setNewMassage] = useState("");

  useEffect(() => {
    async function loadMesages() {
      await fetchFakeMessages().then(data => {
        setmessages(data);
      });
    }
    loadMesages();
  }, []);

  return (
    <div>
      <div className='messages'>
        <ul>
          {
            messages.map(message => (
              <div>
                <div className='message-container'
                  key={message._id}
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
      <form className='message-sender-form'>
        <div className='message-sender-container'>
          <input
            name='message-sender'
            id='message-sender'
            required
            placeholder='Eu só acho engraçado que...'
            value={newMessage}
            onChange={e => setNewMassage(e.target.value)}
          >
          </input>
        </div>
      </form>
    </div>
  )
}

export default Conversation;