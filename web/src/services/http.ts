import axios from 'axios';

/**
 * Service to make HTTP request to the API
 */
export const http = axios.create({ baseURL: 'http://localhost:3001/api' });
