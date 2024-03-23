import axios from 'axios';

export const client = axios.create({
  baseURL: 'http://localhost:3001/',
  headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
});

export async function login({ email, password }) {
  try {
    const { data } = await client.post('users/login', { email, password });
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getContacts() {
  try {
    const { data } = await client.get('/api/contacts');
    console.log(data);
    return data;
  } catch (error) {}
}

export async function register({ email, password }) {}
