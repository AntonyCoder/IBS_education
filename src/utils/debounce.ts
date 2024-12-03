'use strict'

export default function setDebounce (callback: (...args: any[]) => void, delay: number): (...args: any[]) => void {
    let timeout: NodeJS.Timeout;
    return function(...args: any[]): void {
        clearTimeout(timeout);
        timeout = setTimeout(() => callback(...args), delay);
    }
}
