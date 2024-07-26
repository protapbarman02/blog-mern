// src/services/apiService.js
import axios from 'axios';

const API_URL = 'http://127.0.0.1:3000/api/v1';

const apiService = {
    login: async (email, password) => {
        const response = await axios.post(`${API_URL}/auth/login`, { email, password });
        return response.data;
    },
    getUsers: async (params, token) => {
        const response = await axios.get(`${API_URL}/users`, {
            headers: { Authorization: `Bearer ${token}` },
            params
        });
        return response.data;
    },
    getUserById: async (id, token) => {
        const response = await axios.get(`${API_URL}/users/${id}`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data;
    },
    createUser: async (userData, token) => {
        const response = await axios.post(`${API_URL}/users`, userData, {
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data;
    },
    updateUser: async (id, userData, token) => {
        const response = await axios.put(`${API_URL}/users/${id}`, userData, {
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data;
    },
    deleteUser: async (id, token) => {
        const response = await axios.delete(`${API_URL}/users/${id}`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data;
    },
    getRoles: async (params, token) => {
        const response = await axios.get(`${API_URL}/roles`, {
            headers: { Authorization: `Bearer ${token}` },
            params
        });
        return response.data;
    },
    getRoleById: async (id, token) => {
        const response = await axios.get(`${API_URL}/roles/${id}`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data;
    },
    getRolesByUserId: async (userId, token) => {
        const response = await axios.get(`${API_URL}/roles/user/${userId}`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data;
    },
    createRole: async (roleData, token) => {
        const response = await axios.post(`${API_URL}/roles`, roleData, {
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data;
    },
    updateRole: async (id, roleData, token) => {
        const response = await axios.put(`${API_URL}/roles/${id}`, roleData, {
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data;
    },
    deleteRole: async (id, token) => {
        const response = await axios.delete(`${API_URL}/roles/${id}`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data;
    }
};

export default apiService;
