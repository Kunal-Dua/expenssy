import Navbar from "../components/Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { expenseState } from "../store/atoms/expenseAtom";
import axios from "axios";
import type { Expenses } from "../types";
import Form from "../components/Form";

const EditExpense = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const expense = location.state?.expense;

    const [inputs, setInputs] = useState({
        expenseId: expense?.id,
        categoryId: expense?.categoryId,
        name: expense?.expenseName,
        amount: expense?.amount,
        description: expense?.expenseDescription,
    });

    const setExpenses = useSetRecoilState(expenseState);

    async function onSubmission(e: React.FormEvent) {
        e.preventDefault();
        if (inputs.amount > 0 && inputs.name != "") {
            console.log(inputs.categoryId);

            const res = await axios.put(
                `${import.meta.env.VITE_BACKEND_URL}/api/v1/tracker/updateExpense`,
                inputs,
                {
                    headers: {
                        Authorization: localStorage.getItem("token"),
                    },
                },
            );

            setExpenses((prev) =>
                prev.map((exp) =>
                    exp.id === res.data.expense.id
                        ? (res.data.expense as Expenses)
                        : exp,
                ),
            );
            navigate("/");
        } else {
            console.log("Invalid Inputs");
        }
    }

    return (
        <>
            <Navbar />
            <Form
                inputs={inputs}
                setInputs={setInputs}
                onSubmission={onSubmission}
                Editable={false}
                onDeleteCategory={inputs.expenseId}
                onEditCategory={inputs.expenseId}
            />
        </>
    );
};

export default EditExpense;
