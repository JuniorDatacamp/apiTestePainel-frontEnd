import axios from 'axios';

const urlBase = 'http://api.datacamp.net.br';
// const urlBase = 'https://apipainel.herokuapp.com';

const api = axios.create({
    baseURL: urlBase,
});

export default api;