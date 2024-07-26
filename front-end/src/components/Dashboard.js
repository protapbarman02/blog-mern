// src/components/Dashboard.js
import React, { useEffect, useState, useContext } from 'react';
import apiService from '../services/apiService';
import { AuthProvider, useAuth } from '../context/authContext';

const Dashboard = () => {
    const { user, logout } = useContext(AuthContext);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await apiService.getUsers({}, user.token);
                setUsers(response.data.users);
            } catch (err) {
                console.error(err);
            }
        };

        fetchUsers();
    }, [user.token]);

    return (
        <div>
            <h2>Dashboard</h2>
            <button onClick={logout}>Logout</button>
            <ul>
                {users.map((u) => (
                    <li key={u._id}>{u.email}</li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;
