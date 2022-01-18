import axios from 'axios';
import globals from '../globals';

const api = axios.create({
    baseURL: globals.API_URL
})

export default api;