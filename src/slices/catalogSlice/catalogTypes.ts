export interface ICatalogItem {
    id: string;
    name: string;
    price: { value: number; currency: string };
    picture: { path: string; alt: string };
    like: boolean;
}

export interface ICatalogState {
    items: ICatalogItem[];
    filteredItems: ICatalogItem[];
    loading: boolean;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error?: string;
}

export interface ICatalogItemProps {
    item: ICatalogItem;
  }