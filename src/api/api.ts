import axios from "axios";

//Platform é para identificar em qual ambiente estamos executando
import { Platform } from "react-native";

// IP LOCAL PADRÃO do android é 10.2.2:3000
export const API_BASE_URL = Platform.OS === 'android' ? 
'http://10.0.2.2:3000' : 'http://localhost:3000';

const api = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json', // enviando json
        Accept: 'application/json', //esperando resposta em json
    }
})

export default api;