'use strict'
import { LOCAL_SERVER_URL } from "./apiConfig.js";

//Запрос на получение списка товаров
export default async function fetchCatalogListData() {
    try {
        const response = await fetch(`${LOCAL_SERVER_URL}item/`);
        if (!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status}`);
        }
        const data = await response.json();
        return data.content;
    } catch (e) {
        console.error('Ошибка:', e);
    }
}

//Запрос на получение одного товара
export async function fetchProductData(itemId) {
    try {
        const response = await fetch(`${LOCAL_SERVER_URL}item/${itemId}`);
        if (!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (e) {
        console.error('Ошибка:', e);
    }
}