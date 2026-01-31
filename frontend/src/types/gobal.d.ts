type Inputs = {
    expenseId: string;
    categoryId: string;
    name: string;
    amount: number;
    description: string;
};

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

interface categoryDetails {
    id: string;
    name: string;
}

type FormProps = {
    inputs: Inputs;
    setInputs: React.Dispatch<React.SetStateAction<Inputs>>;
    onSubmission: (e: React.FormEvent) => Promise<void>;
    onEditCategory: (categoryId: string, categoryName: string) => Promise<void>;
    onDeleteCategory: (categoryId: string) => Promise<void>;
    Editable: boolean;
};

type categorySumType = {
    categoryId: string;
    categoryName: string;
    amount: number;
};
