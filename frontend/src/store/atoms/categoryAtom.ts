import { atom } from "recoil";
import type { categoryDetails } from "../../types";

export const categoriesState = atom<categoryDetails[]>({
    key: "categoriesState",
    default: [],
});
