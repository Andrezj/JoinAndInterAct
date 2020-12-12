import React, { useState, useEffect } from 'react';
import fetchFakeMessages from '../../utils/fetchFakeMessages';


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
    <div>
      <ul>
        {
          messages.map(message => (
            <div
              style={{ textAlign: `${message.source ? 'left' : 'right'}` }}
            >{message.message}</div>
          ))
        }
      </ul>
    </div>
  )
}

export default Conversation;