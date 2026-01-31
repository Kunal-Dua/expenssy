import { selector } from "recoil";
import { expenseState } from "../atoms/expenseAtom";

export const categoryAmountSelector = selector({
    key: "categoryAmountSelector",
    get: ({ get }) => {
        const expenses = get(expenseState);
        return expenses.map((e) => ({
            categoryId: e.categoryId,
            categoryName: e.categoryName,
            amount: e.amount,
        }));
    },
});
