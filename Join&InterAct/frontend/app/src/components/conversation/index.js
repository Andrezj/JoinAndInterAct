import React, { useState, useEffect } from 'react';
import fetchFakeMessages from '../../utils/fetchFakeMessages';

import './styles.css';


function Conversation({ feature }, { onSubmit }) {

  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function loadMesages() {
      await fetchFakeMessages().then(data => {
        setMessages(data);
      });
    }
    loadMesages();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    await handleSendMessage({
      message
    });

    setMessage('');
  }

  async function handleSendMessage(data) {

    /* const response = await api.post('/messages/{id}', data) */

    setMessages([...messages, data]);
  }

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
      <form
        className='message-sender-form'
        onSubmit={handleSubmit}
      >
        <div className='message-sender-container'>
          <input
            name='message-sender'
            id='message-sender'
            placeholder='Eu só acho engraçado que...'
            value={message}
            onChange={e => setMessage(e.target.value)}
          >
          </input>
        </div>
      </form>
    </div>
  )
}

export default Conversation;