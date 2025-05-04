import { create } from 'zustand';

interface Product {
    id: number;
    name: string;
    description: string;
    price: string;
    discount: string;
    title: string;
    image: string;
}

interface UserSession {
    userId: string | null;
    userName: string | null;
    email: string | null;
    isLoggedIn: boolean;
    setSession: (userId: string) => void;
    clearSession: () => void;
}

interface ProductStore {
    product: Product | null;
    category: string;
    setProduct: (product: Product) => void;
    setCategory: (category: string) => void;
}

export const useAppStore = create<UserSession>((set) => ({
    userId: null,
    userName: null,
    email: null,
    isLoggedIn: false,
    setSession: (userId) =>
        set({ userId, isLoggedIn: true }),
    clearSession: () =>
        set({ userId: null, isLoggedIn: false }),
}));

export const useProductStore = create<ProductStore>((set) => ({
    product: null,
    category: 'All',
    setProduct: (product: Product) =>
        set({ product }),
    setCategory: (category: string) =>
        set({ category }),
}));
