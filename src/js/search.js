'use strict'
import fetchCatalogListData from "./api";
import { catalogItems, renderCatalogList } from "./main";
import setDebounce from "./debounce";

const searchInput = document.querySelector('.search-field');

async function initSearchCatalog() {
    if(!catalogItems){
        return;
    }

    const catalogList = await fetchCatalogListData();

    const debouncedRender = setDebounce((query) => {
        const filteredCatalogList = catalogList.filter(item => {
            return item.name.toLowerCase().includes(query);
        });
        renderCatalogList(filteredCatalogList);
    }, 1000);

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        debouncedRender(query);
    });
}

searchInput.addEventListener('focus', () => {
    initSearchCatalog();
});