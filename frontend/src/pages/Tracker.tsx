import CategoryChart from "../components/categoryChart";
import CreateExpense from "../components/CreateExpense";
import ExpenseList from "../components/ExpenseList";
import Navbar from "../components/Navbar";

const Tracker = () => {
    return (
        <>
            <Navbar />
            <div className="flex p-2 my-5 justify-evenly">
                <div className="">
                    <CreateExpense />
                    <ExpenseList />
                </div>
                <div>
                    <CategoryChart />
                </div>
            </div>
        </>
    );
};

export default Tracker;
