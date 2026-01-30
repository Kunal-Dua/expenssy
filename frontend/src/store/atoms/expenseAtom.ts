import { atom } from "recoil";
import type { Expenses } from "../../types/expenses";

export const expenseState = atom<Expenses[]>({
    key: "expenseState",
    default: [],
});
