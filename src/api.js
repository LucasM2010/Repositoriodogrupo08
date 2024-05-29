import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5173/api', 
});

export const getItems = () => api.get('/items');
export const createItem = (item) => api.post('/items', item);

export default api;
