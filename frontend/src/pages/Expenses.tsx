import ExpenseTable from "../components/ExpenseTable";
import Navbar from "../components/Navbar";
import { useRecoilValue } from "recoil";
import { expenseState } from "../store/atoms/expenseAtom";

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

const Expenses = () => {
    const expense = useRecoilValue(expenseState);
    return (
        <div>
            <Navbar />
            <ExpenseTable expenses={expense} />
        </div>
    );
};

export default Expenses;
