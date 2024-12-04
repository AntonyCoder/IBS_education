'use strict'
import apiClient from "./apiClient";

interface CatalogItem {
    id: string;
    name: string;
    info: string;
    details: string;
    price: {
        value: number;
        currency: string;
    };
    picture: {
        path: string;
        alt: string;
    };
    [key: string]: any;
}

interface ProductDetails extends CatalogItem {
    info: string;
    details: string;
    like: boolean;
}

interface ApiResponse<T> {
    content?: T;
}

//Запрос на получение списка товаров
export default async function fetchCatalogListData(): Promise<CatalogItem[]> {
    try {
        const response = await apiClient.get<{ content: CatalogItem[] }>(`item/`);
        if (response.data?.content) {
            return response.data.content;
        } else {
            throw new Error('Поле content отсутствует');
        }
    } catch (e) {
        console.error('Ошибка:', e);
        throw new Error('Не удалось загрузить данные каталога');
    }
}

//Запрос на получение одного товара
export async function fetchProductData(itemId: string): Promise<ProductDetails | undefined> {
    try {
        const response = await apiClient.get<ApiResponse<ProductDetails>>(`item/${itemId}`);
        console.log('API Response:', response.data.content);
        
        if (response.data?.content) {
            return response.data.content;
        } else {
            throw new Error("Поле content отсутствует");
        }
    } catch (e) {
        console.error('Ошибка:', e);
        return undefined;
    }
}