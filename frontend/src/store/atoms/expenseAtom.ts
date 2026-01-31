import { atom } from "recoil";

export const expenseState = atom<Expenses[]>({
    key: "expenseState",
    default: [],
});
