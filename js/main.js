'use strict'

import fetchCatalogListData from "./api.js";
import { LOCAL_SERVER_URL } from "./apiConfig.js";

//Получение массива данных
async function getCatalogListData() {
    try {
        const responseData = await fetchCatalogListData();
        renderCatalogList(responseData);
    } catch (e) {
        console.error("Ошибка:", e);
    }
}

export function renderCatalogList(items) {
    const catalogItems = document.querySelector('.catalog-items');

    if (!catalogItems) {
        throw new Error("Элемент с классом 'catalog-items' не найден.");
    }

    catalogItems.innerHTML = '';

    const fragmentCatalogList = document.createDocumentFragment();

    items.forEach(item => {
        //Создаем элемент карточки товара
        const productItem = document.createElement('div');
        productItem.className = 'item';

        //Создаем элемент ссылки товара
        const productLink = document.createElement('a');
        productLink.href = `/item.html?id=${item.id}`;
        productLink.className = 'item-link';

        //Создаем элемент кнопки добавления в избранное
        const favoriteIcon = document.createElement('img');
        favoriteIcon.className = 'item__favorite-icon'
        favoriteIcon.alt = 'favorite';
        favoriteIcon.src = `${item.like ? 'svg/favorite_active.svg' : 'svg/favorite.svg'}`;

        //Создаем элемент изображения
        const productImage = document.createElement('img');
        productImage.src = `${LOCAL_SERVER_URL}${item.picture.path}`;
        productImage.alt = item.picture.alt;
        productImage.className = 'item-image'

        //Создаем элемент названия товара
        const productTitle = document.createElement('span');
        productTitle.className = 'item-title';
        productTitle.textContent = item.name;

        //Создаем элемент цены товара
        const productPrice = document.createElement('span');
        productPrice.className = 'item-price';
        productPrice.textContent = `${item.price.value} ${item.price.currency}`;

        productItem.appendChild(productLink);

        productLink.appendChild(favoriteIcon);
        productLink.appendChild(productImage);
        productLink.appendChild(productTitle);
        productLink.appendChild(productPrice);


        fragmentCatalogList.appendChild(productItem);
    })

    catalogItems.appendChild(fragmentCatalogList);

}

getCatalogListData();
