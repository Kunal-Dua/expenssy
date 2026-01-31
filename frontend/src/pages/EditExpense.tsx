import Navbar from "../components/Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import { MenuItem, TextField } from "@mui/material";
import { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoriesState } from "../store/atoms/categoryAtom";
import { expenseState } from "../store/atoms/expenseAtom";
import type { Expenses } from "../types/expenses";
import axios from "axios";
import TextBox from "../components/TextBox";

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

    const category = useRecoilValue(categoriesState);
    const setExpenses = useSetRecoilState(expenseState);

    async function OnSubmission(e: React.FormEvent) {
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
            <div className="flex-1">
                <div className="rounded-md border-gray-500 m-2 p-2">
                    <h3 className="flex ustify-around">Add Expense</h3>
                    <form className="flex flex-col gap-2 mt-5">
                        <TextBox
                            type="number"
                            id="outlined-basic"
                            label="Amount"
                            value={inputs.amount.toString()}
                            required
                            onChange={(e) => {
                                setInputs({
                                    ...inputs,
                                    amount: Number(e.target.value),
                                });
                            }}
                        />
                        <TextField
                            id="outlined-select-category"
                            label="Category"
                            value={inputs.categoryId}
                            required
                            select
                            onChange={(e) => {
                                setInputs({
                                    ...inputs,
                                    categoryId: e.target.value,
                                });
                            }}
                            sx={{
                                minWidth: 120,
                                "& input": {
                                    width: "auto",
                                },
                            }}
                        >
                            {category.map((option) => (
                                <MenuItem value={option.id} key={option.id}>
                                    {option.name}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextBox
                            id="outlined-basic"
                            label="Expense Name"
                            value={inputs.name}
                            required
                            onChange={(e) => {
                                setInputs({
                                    ...inputs,
                                    name: e.target.value,
                                });
                            }}
                        />

                        <TextBox
                            id="outlined-basic"
                            label="Description"
                            value={inputs.description}
                            onChange={(e) => {
                                setInputs({
                                    ...inputs,
                                    description: e.target.value,
                                });
                            }}
                        />
                        <button
                            className="border bg-blue-600 border-blue-600 text-sm rounded-lg p-2.5 text-white block"
                            onClick={OnSubmission}
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default EditExpense;
