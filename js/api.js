'use strict'

export const localhost = 'http://localhost:3006/';

//Запрос на получение списка товаров
export default async function fetchCatalogListData() {
    try {
        const response = await fetch(`${localhost}item/`);
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
        const response = await fetch(`${localhost}item/${itemId}`);
        if (!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (e) {
        console.error('Ошибка:', e);
    }
}