import { selectorFamily } from "recoil";
import { expenseState } from "../atoms/expenseAtom";

export const expenseByIdState = selectorFamily<Expenses | undefined, string>({
    key: "expenseByIdState",
    get:
        (id: string) =>
        ({ get }) => {
            const expenses = get(expenseState);
            return expenses.find((exp) => exp.id === id);
        },
});
