import { Link } from "react-router-dom";
import AddCategory from "../components/AddCategory";
import CategoryChart from "../components/CategoryChart";
import CreateExpense from "../components/CreateExpense";
import Navbar from "../components/Navbar";
import { useRecoilValue } from "recoil";
import { expenseState } from "../store/atoms/expenseAtom";
import ExpenseTable from "../components/ExpenseTable";

const Tracker = () => {
    const expense = useRecoilValue(expenseState);
    return (
        <>
            <Navbar />
            <div className="flex p-2 my-5 gap-5">
                <div className="flex flex-col flex-1">
                    <CreateExpense />
                    <ExpenseTable expenses={expense.slice(0, 10)} />
                    <Link to="/expenses">
                        <div>See more</div>
                    </Link>
                </div>
                <div className="flex-1">
                    <AddCategory />
                    <CategoryChart />
                </div>
            </div>
        </>
    );
};

export default Tracker;
