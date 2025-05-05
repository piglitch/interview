import { User } from '@supabase/supabase-js';
import { create } from 'zustand';

interface UserSession {
    user: User | null
    isAuthLoaded: boolean
    isLoggedIn: boolean
    setSession: (user: User | null) => void
    clearSession: () => void
}

interface Product {
    id: number;
    name: string;
    description: string;
    price: string;
    discount: string;
    title: string;
    image: string;
}
  
interface ProductStore {
    product: Product | null;
    category: string;
    setProduct: (product: Product) => void;
    setCategory: (category: string) => void;
}

export const useAppStore = create<UserSession>((set) => ({
    user: null,
    isAuthLoaded: false,
    isLoggedIn: false,
    setSession: (user) =>
        set({
        user,
        isLoggedIn: !!user
        }),
    clearSession: () =>
        set({
        user: null,
        isLoggedIn: false
    })
}))

export const useProductStore = create<ProductStore>((set) => ({
    product: null,
    category: 'All',
    setProduct: (product: Product) =>
        set({ product }),
    setCategory: (category: string) =>
        set({ category }),
}));
