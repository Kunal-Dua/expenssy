
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";
import ExpenseTable from "./ExpenseTable";
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

const ExpenseList = () => {
    const [expenseList, setExpenseList] = useState<Expenses[]>([]);

    useEffect(() => {
        axios
            .get(`${BACKEND_URL}/api/v1/tracker/getExpense`, {
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
        <ExpenseTable expenses={expenseList}/>
    );
};

export default ExpenseList;
