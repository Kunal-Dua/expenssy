import { atom } from "recoil";
import { dummyCategory } from "../../types/types";

export const categoriesState = atom<categoryDetails[]>({
    key: "categoriesState",
    default: dummyCategory,
});
