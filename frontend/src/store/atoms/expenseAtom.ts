import { atom } from "recoil";
import { dummyExpenses } from "../../types/types";

export const expenseState = atom<Expenses[]>({
    key: "expenseState",
    default: dummyExpenses,
});
