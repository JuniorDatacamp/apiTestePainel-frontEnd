import axios from 'axios';

// const urlBase = 'http://localhost:3333';
const urlBase = 'https://apipainel.herokuapp.com';

const api = axios.create({
    baseURL: urlBase,
});

export default api;