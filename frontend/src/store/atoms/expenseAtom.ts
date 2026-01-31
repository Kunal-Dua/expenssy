import { atom } from "recoil";
import type { Expenses } from "../../types";

export const expenseState = atom<Expenses[]>({
    key: "expenseState",
    default: [],
});
