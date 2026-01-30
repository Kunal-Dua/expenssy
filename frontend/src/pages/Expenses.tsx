import ExpenseTable from "../components/ExpenseTable";
import Navbar from "../components/Navbar";
import { useRecoilValue } from "recoil";
import { expenseState } from "../store/atoms/expenseAtom";
import type { Expenses } from "../types/expenses";

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
