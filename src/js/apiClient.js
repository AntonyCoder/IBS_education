import axios from "axios";
import { LOCAL_SERVER_URL } from "./apiConfig";

const apiClient = axios.create({
    baseURL: LOCAL_SERVER_URL,
    timeout: 1000
});

apiClient.interceptors.response.use(
    response => response,
    error => {
        if (error.response) {
            console.error(`Ошибка HTTP: ${error.response.status}`);
        } else if (error.request) {
            console.error('Сервер не отвечает');
        } else {
            console.error(`Ошибка настройки запроса: ${error.message}`);
        }
        return Promise.reject.error;
    }
)

export default apiClient;