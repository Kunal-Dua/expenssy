import { Link } from "react-router-dom";
import AddCategory from "../components/AddCategory";
import CreateExpense from "../components/CreateExpense";
import Navbar from "../components/Navbar";
import { useRecoilValue } from "recoil";
import { expenseState } from "../store/atoms/expenseAtom";
import ExpenseTable from "../components/ExpenseTable";
import Chart from "../components/Chart";

const Tracker = () => {
    const expense = useRecoilValue(expenseState);
    return (
        <>
            <Navbar />
            <div className="md:flex p-2 my-5 gap-5">
                <div className="md:flex flex-col flex-1">
                    <CreateExpense />
                    <ExpenseTable expenses={expense.slice(0, 10)} />
                    <Link to="/expenses">
                        <div>See more</div>
                    </Link>
                </div>
                <div className="flex-1 flex-col">
                    <AddCategory />
                    <Chart />
                </div>
            </div>
        </>
    );
};

export default Tracker;
