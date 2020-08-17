import axios from 'axios';


const baseURL = '/api';

const axiosInstance = axios.create({
    baseURL
});

export default axiosInstance;