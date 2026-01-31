import { atom } from "recoil";

export const categoriesState = atom<categoryDetails[]>({
    key: "categoriesState",
    default: [],
});
