'use strict'
import fetchCatalogListData from "./api.js"
import { renderCatalogList } from "./main.js";

async function initSearchCatalog() {
    const catalogList = await fetchCatalogListData();
    const searchInput = document.querySelector('.search-field');

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        const filteredCatalogList = catalogList.filter(item => {
            return item.name.toLowerCase().includes(query);
        });
        renderCatalogList(filteredCatalogList);
    });
}

initSearchCatalog();