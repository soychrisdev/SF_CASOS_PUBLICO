import { StateCreator } from "zustand";

export interface AuthSlice {
	auth: string | undefined;
	// userInfo: {} | undefined;
	setAuth: (value: string) => void;
	clearAuthState: () => void;
	// setUserInfo: (value: {} | undefined) => void;
}
export const createAuthSlice: StateCreator<AuthSlice> = (set) => ({
	auth: undefined,
	// setUserInfo: (value) => set({ userInfo: value }),
	setAuth: (value) => set({ auth: value }),
	clearAuthState: () => set({ auth: undefined }),
});
