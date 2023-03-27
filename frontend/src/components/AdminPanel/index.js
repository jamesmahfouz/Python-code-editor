import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css'
import AdminLogo from '../../components/AdminLogo'

function AdminPanel() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/v1/get_all_user', 
    {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
      .then(response => {
        console.log(response.data)
        setUsers(response.data.users);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div className='table-container'>
        <div className='admin-logo'><AdminLogo/></div>
        
        <table className='table'>
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
    </div>
    </div>
    
    
  );
}

export default AdminPanel;
