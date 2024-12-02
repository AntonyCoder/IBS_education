'use strict'
import axios from "axios";
import { LOCAL_SERVER_URL } from "./apiConfig";
import { showError } from "@helpers/errorService";

const apiClient = axios.create({
    baseURL: LOCAL_SERVER_URL,
    timeout: 1000
});

apiClient.interceptors.response.use(
    response => response,
    error => {
        if (error.response) {
            console.error(`Ошибка HTTP: ${error.response.status}`);
            showError(`Ошибка HTTP: ${error.response.status}`);
        }
        if (error.request) {
            console.error('Сервер не отвечает');
            showError('Сервер не отвечает');
        }
        console.error(`Ошибка настройки запроса: ${error.message}`);
        showError(`Ошибка настройки запроса: ${error.message}`);

        return Promise.reject(error);
    }
)

export default apiClient;