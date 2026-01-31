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