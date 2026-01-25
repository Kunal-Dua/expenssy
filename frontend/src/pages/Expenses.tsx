import { useEffect, useState } from "react";
import axios from "axios";
import ExpenseTable from "../components/ExpenseTable";
import Navbar from "../components/Navbar";

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
    const [expenseList, setExpenseList] = useState<Expenses[]>([]);

    const fetchExpenses = async () => {
        const res = await axios.get(
            `${import.meta.env.VITE_BACKEND_URL}/api/v1/tracker/getExpense`,
            {
                headers: {
                    Authorization: localStorage.getItem("token"),
                },
            },
        );
        setExpenseList(res.data);
    };
    useEffect(() => {
        fetchExpenses();
    }, []);

    return (
        <div>
            <Navbar />
            <ExpenseTable expenses={expenseList} onChange={fetchExpenses} />
        </div>
    );
};

export default Expenses;
