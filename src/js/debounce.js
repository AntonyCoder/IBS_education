'use strict'

export default function setDebounceToInput (callback, delay){
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => callback(...args), delay);
    }
}
