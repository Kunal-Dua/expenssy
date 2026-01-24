import CategoryChart from "../components/categoryChart";
import CreateExpense from "../components/CreateExpense";
import ExpenseList from "../components/ExpenseList";
import Navbar from "../components/Navbar";

const Tracker = () => {
    return (
        <>
            <Navbar />
            <div className="flex p-2 my-5 gap-5">
                <div className="flex flex-col flex-1">
                    <CreateExpense />
                    <ExpenseList />
                </div>
                <div className="flex-1">
                    <CategoryChart />
                </div>
            </div>
        </>
    );
};

export default Tracker;
