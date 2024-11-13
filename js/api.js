'use strict'

//Запрос на получение списка товаров

export default async function getItemsData() {
    try {
        const response = await fetch('http://localhost:3006/item/');
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

export async function getItem(itemId) {
    try {
        const response = await fetch(`http://localhost:3006/item/${itemId}`);
        if (!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (e) {
        console.error('Ошибка:', e);
    }
}


//Запрос на получение маленького изображения товара 

export async function getPictureMin(pictureId) {
    try {
        const response = await fetch(`http://localhost:3006/picture/min/${pictureId}`);
        if (!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status}`);
        }
        const imageBlob = await response.blob();
        const imageUrl = URL.createObjectURL(imageBlob);

        return imageUrl;
    } catch (e) {
        console.error('Ошибка:', e);
    }
}

//Запрос на получение большого изображения товара 

export async function getPictureFull(pictureId) {
    try {
        const response = await fetch(`http://localhost:3006/picture/full/${pictureId}`);
        if (!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status}`);
        }
        const imageBlob = await response.blob();
        const imageUrl = URL.createObjectURL(imageBlob);

        return imageUrl;
    } catch (e) {
        console.error('Ошибка:', e);
    }
}

