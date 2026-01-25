import { atom } from "recoil";

interface categoryDetails {
    id: string;
    name: string;
}
export const categoriesState = atom<categoryDetails[]>({
    key: "categoriesState",
    default: [],
});
