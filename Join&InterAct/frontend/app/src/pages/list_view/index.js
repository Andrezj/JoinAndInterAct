import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import "./aside.css";
import './main.css';
import './page.css';

import Animal from 'react-animals';
import SideForm from '../../components/side_form/';
import UserCardItem from '../../components/list_item/';

import fetchFakeData from '../../utils/fetchFakeData';

function ListView() {
  const [users, setUsers] = useState({ features: [] });
  const coords = { lng: -38.0633088, lat: -6.537216 };

  useEffect(() => {
    async function loadUsers() {
      /* const response = await api.get('/users');

      setUsers(response.data); */

      await fetchFakeData(coords).then(data => {
        console.log(data);
        setUsers(data)
      });
    }

    loadUsers();
  }, []);

  /* async function handleUsers(data) {
      const response = await api.post('/users', data);

      setUsers([... users, response.data]);
  } */

  return (
    <div id='list-view-page'>
      <aside>
        <strong>Join in</strong>
        <div>
          <Animal />
                    As a Random Animal
                </div>
        <SideForm />
      </aside>
      <main>
        <ul>
          {users.features.map(feature => (
            <UserCardItem key={feature._id} feature={feature} />
          ))}
        </ul>
      </main>
    </div>
  )
}

export default ListView;