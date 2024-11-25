'use strict'
import axios from "axios";
import { LOCAL_SERVER_URL } from "./apiConfig";
import showErrorModal from "../errorModal";

const apiClient = axios.create({
    baseURL: LOCAL_SERVER_URL,
    timeout: 1000
});

apiClient.interceptors.response.use(
    response => response,
    error => {
        if (error.response) {
            console.error(`Ошибка HTTP: ${error.response.status}`);
            showErrorModal(`Ошибка HTTP: ${error.response.status}`);
        }
        if (error.request) {
            console.error('Сервер не отвечает');
            showErrorModal('Сервер не отвечает');
        }
        console.error(`Ошибка настройки запроса: ${error.message}`);
        showErrorModal(`Ошибка настройки запроса: ${error.message}`);

        return Promise.reject(error);
    }
)

export default apiClient;