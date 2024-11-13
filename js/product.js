'use strict'

import { getItem } from "./api.js";
import { getPictureFull } from "./api.js";

//Получение массива данных
async function getItemData() {
    try {
        const responseData = await getItem('571fc60d-ea2c-469e-a5b6-c229d31f195d');
        renderProduct(responseData.content);
    } catch (e) {
        console.error('Ошибка:', e);
    }
}

async function renderProduct(item) {
    const itemPage = document.querySelector('.item-page');

    const picturePath = await getPictureFull('06c4a148-7892-435e-a168-56c86b0940a0');

    itemPage.innerHTML = `
    <div class="image-wrapper">
            <img src="${picturePath}" alt="${item.picture.alt}" class="item__image-main">
        </div>
        <div class="item-information">
            <h1 class="item__title-main">${item.name}</h1>
            <p class="item-description">${item.info}</p>
            <span class="item-details">Details</span>
            <p class="item-description">${item.details}</p>
            <div class="purchase-wrapper">
                <span class="item__price-main">${item.price.value} ${item.price.currency}</span>
                <div class="quantity-wrapper">
                    <button class="control btn-minus ">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_3333_145)">
                                <path d="M19 13H5V11H19V13Z" fill="#E97F03" />
                            </g>
                            <defs>
                                <clipPath id="clip0_3333_145">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </button>
                    <input type="text" class="quantity" value="1">
                    <button class="control btn-plus ">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_3333_142)">
                                <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="#E97F03" />
                            </g>
                            <defs>
                                <clipPath id="clip0_3333_142">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </button>
                </div>
                <button class="add-btn">Add to cart</button>
                <img src="${item.like ? 'svg/favorite_active.svg' : 'svg/favorite.svg'}" 
                alt="favorite" class="favorite__icon-main">
            </div>
        </div>
    `
}

getItemData();
