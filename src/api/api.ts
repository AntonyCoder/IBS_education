'use strict'
import apiClient from "./apiClient";
import { ICatalogItem } from "@slices/catalogSlice/catalogTypes";
import { IProduct } from "@slices/productSlice/productTypes";

interface ApiResponse<T> {
    content?: T;
}

//Запрос на получение списка товаров
export default async function fetchCatalogListData(): Promise<ICatalogItem[]> {
    try {
        const response = await apiClient.get<{ content: ICatalogItem[] }>(`item/`);
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
export async function fetchProductData(itemId: string): Promise<IProduct | undefined> {
    try {
        const response = await apiClient.get<ApiResponse<IProduct>>(`item/${itemId}`);
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