import ExpenseTable from "./ExpenseTable";
import { useRecoilValue } from "recoil";
import { expenseState } from "../store/atoms/expenseAtom";

const ExpenseList = () => {
    const expense = useRecoilValue(expenseState);
    return <ExpenseTable expenses={expense.slice(0, 10)} />;
};

export default ExpenseList;
