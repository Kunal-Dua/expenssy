import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
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

    useEffect(() => {
        axios
            .get(`${BACKEND_URL}/api/v1/tracker/`, {
                headers: {
                    Authorization: localStorage.getItem("token"),
                },
            })
            .then((res) => {
                setExpenseList(res.data);
            })
            .catch((e) => {
                console.error(e);
            });
    }, [expenseList]);

    return (
        <div>
            <Navbar />
            <ExpenseTable expenses={expenseList} />
        </div>
    );
};

export default Expenses;
