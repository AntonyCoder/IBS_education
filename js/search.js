'use strict'
import getItemsData from "./api.js"
import { renderItems } from "./main.js";

async function initSearch() {
    const items = await getItemsData();
    const searchInput = document.querySelector('.search-field');

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        const filteredItems = items.filter(item => {
            return item.name.toLowerCase().includes(query);
        });
        renderItems(filteredItems);
    });
}

initSearch();