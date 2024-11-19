'use strict'
import fetchCatalogListData from "./api.js"
import { renderCatalogList } from "./main.js";
import setDebounceToInput from "./debounce.js";

async function initSearchCatalog() {
    const catalogList = await fetchCatalogListData();
    const searchInput = document.querySelector('.search-field');

    const debouncedRender = setDebounceToInput((query) => {
        const filteredCatalogList = catalogList.filter(item => {
            return item.name.toLowerCase().includes(query);
        });
        renderCatalogList(filteredCatalogList);
    }, 1000)

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        debouncedRender(query);
    });
}

initSearchCatalog();