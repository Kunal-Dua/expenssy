export type Inputs = {
    expenseId: string;
    categoryId: string;
    name: string;
    amount: number;
    description: string;
};

export interface Expenses {
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

export type FormProps = {
    inputs: Inputs;
    setInputs: React.Dispatch<React.SetStateAction<Inputs>>;
    onSubmission: (e: React.FormEvent) => Promise<void>;
    onEditCategory: (categoryId: string, categoryName: string) => Promise<void>;
    onDeleteCategory: (categoryId: string) => Promise<void>;
    Editable: boolean;
};

export interface categoryDetails {
    id: string;
    name: string;
}

export const PALETTE = ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"];
export const OTHERS_COLOR = "#B0B0B0";

export type categorySumType = {
    categoryId: string;
    categoryName: string;
    amount: number;
};
