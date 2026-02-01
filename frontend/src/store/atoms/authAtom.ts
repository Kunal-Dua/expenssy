import { atom } from "recoil";

export const authState = atom<{
    isAuthenticated: boolean;
    user: any | null;
}>({
    key: "authState",
    default: {
        user: null,
        isAuthenticated: false,
    },
});
