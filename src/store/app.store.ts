import { create } from 'zustand';

interface UserSession {
    userId: string | null;
    userName: string | null;
    email: string | null;
    isLoggedIn: boolean;
    setSession: (userId: string, token: string) => void;
    clearSession: () => void;
}

export const useAppStore = create<UserSession>((set) => ({
    userId: null,
    userName: null,
    email: null,
    token: null,
    isLoggedIn: false,
    setSession: (userId, token) =>
        set({ userId, isLoggedIn: true }),
    clearSession: () =>
        set({ userId: null, isLoggedIn: false }),
}));
