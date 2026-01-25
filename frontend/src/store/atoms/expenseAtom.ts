import { atom } from "recoil";
interface Expenses {
    amount: number;
    categoryId: string;
    categoryName: string;
    dateCreated: string;
    dateUpdated: string;
    expenseDescription: string;
    expenseName: string;
    id: string;
    userId: string;
}

export const expenseState = atom<Expenses[]>({
    key: "expenseState",
    default: [],
});
