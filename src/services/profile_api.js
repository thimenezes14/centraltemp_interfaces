import axios from 'axios';


const MEU_IP = process.env.REACT_APP_IP;
const MINHA_PORTA = '3002';

const api = axios.create({
    baseURL: `http://${MEU_IP}:${MINHA_PORTA}`
})

export default api;