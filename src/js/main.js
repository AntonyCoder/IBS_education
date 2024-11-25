'use strict'

import fetchCatalogListData from "@api/api";
import { LOCAL_SERVER_URL } from "@api/apiConfig";
import favoriteActiveIcon from '@svg/favorite_active';
import favoriteDisabledIcon from '@svg/favorite';

//Получение массива данных
export const catalogItems = document.querySelector('.catalog-items');

async function getCatalogListData() {
    if (!catalogItems) {
        return;
    }

    try {
        const responseData = await fetchCatalogListData();
        renderCatalogList(responseData);
    } catch (e) {
        console.error("Ошибка:", e);
    }
}

export function renderCatalogList(items) {
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
        productLink.href = `item.html?id=${item.id}`;
        productLink.className = 'item-link';

        //Создаем элемент кнопки добавления в избранное
        const favoriteIcon = document.createElement('img');
        favoriteIcon.className = 'item__favorite-icon'
        favoriteIcon.alt = 'favorite';
        favoriteIcon.src = `${item.like ? favoriteActiveIcon : favoriteDisabledIcon}`;

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
