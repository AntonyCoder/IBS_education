'use strict'
import apiClient from "./apiClient";

let catalogCache = null

//Запрос на получение списка товаров
export default async function fetchCatalogListData() {
    try {
        if (catalogCache) {
            return catalogCache;
        }
        const response = await apiClient.get(`item/`);
        catalogCache = response.data.content;
        return catalogCache;
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