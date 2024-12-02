'use strict'
import apiClient from "./apiClient";


//Запрос на получение списка товаров
export default async function fetchCatalogListData() {
    try {
        const response = await apiClient.get(`item/`);
        const data = response.data.content;
        return data;
    } catch (e) {
        console.error('Ошибка:', e);
    }
}

//Запрос на получение одного товара
export async function fetchProductData(itemId) {
    try {
        const response = await apiClient.get(`item/${itemId}`);
        return response.data;
    } catch (e) {
        console.error('Ошибка:', e);
    }
}