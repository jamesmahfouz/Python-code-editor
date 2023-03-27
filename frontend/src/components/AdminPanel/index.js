import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AdminPanel() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.post('http://localhost:8000/api/v1/get_all_user')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default AdminPanel;
