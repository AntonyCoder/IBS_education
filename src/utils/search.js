'use strict'
import setDebounce from "./debounce";


export default function initSearch(items, callback, delay = 1000) {

    const debouncedFilter = setDebounce((query) => {
        const filteredItems = items.filter(item =>
            item.name.toLowerCase().includes(query.toLowerCase())
        );
        callback(filteredItems);
    }, delay);

    return debouncedFilter;
}