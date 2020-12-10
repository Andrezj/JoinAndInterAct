import React, { useState, useEffect } from 'react';
import api from '../../services/api';

function ListView() {
    const [Users, setUsers] = useState([]);

    useEffect(() => {
        async function loadUsers() {
            const response = await api.get('/users');

            setUsers(response.data);
        }
    }, []);

    async function handleUsers(data) {
        const response = await api.post('/users', data);

        setUsers([... Users, response.data]);
    }

    return (
        <div id='list-view-page'>
            <aside>
                <strong>Join in</strong>
            </aside>
            <main>
                
            </main>
        </div>
    )
}

export default ListView;