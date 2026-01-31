import React, { useState } from "react";
import { Button, MenuItem, TextField } from "@mui/material";
import axios from "axios";
import { useRecoilState } from "recoil";
import { categoriesState } from "../store/atoms/categoryAtom";
import { expenseState } from "../store/atoms/expenseAtom";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import type { Expenses } from "../types/expenses";

const CreateExpense = () => {
    const [inputs, setInputs] = useState({
        categoryId: "",
        name: "",
        amount: 0,
        description: "",
    });

    const onEditCategory = async (categoryid: string) => {
        try {
            const res = await axios.put(
                `${import.meta.env.VITE_BACKEND_URL}/api/v1/tracker/updateCategory`,
                { categoryid },
                {
                    headers: {
                        Authorization: localStorage.getItem("token"),
                    },
                },
            );
        } catch (err) {
            console.error(err);
        }
    };

    const onDeleteCategory = async (id: string) => {
        try {
            const res = await axios.delete(
                `${import.meta.env.VITE_BACKEND_URL}/api/v1/tracker/deleteCategory/${id}`,
                {
                    headers: {
                        Authorization: localStorage.getItem("token"),
                    },
                },
            );
            if (res.status == 200) {
                setCategory((prev) => prev.filter((cat) => cat.id != id));
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                if (error.response?.status === 403) {
                    console.log("Category cannot be deleted, expenses exist");
                    return;
                }
            } else {
                console.log(error);
            }
        }
    };

    const [category, setCategory] = useRecoilState(categoriesState);
    const [expenses, setExpenses] = useRecoilState(expenseState);

    async function OnSubmission(e: React.FormEvent) {
        e.preventDefault();
        if (inputs.amount > 0 && inputs.name != "") {
            const res = await axios.post(
                `${import.meta.env.VITE_BACKEND_URL}/api/v1/tracker/addExpense`,
                inputs,
                {
                    headers: {
                        Authorization: localStorage.getItem("token"),
                    },
                },
            );
            setExpenses([...expenses, res.data.expense as Expenses]);
            setInputs({
                categoryId: "",
                name: "",
                amount: 0,
                description: "",
            });
        } else {
            console.log("Invalid Inputs");
        }
    }

    return (
        <div className="flex-1">
            <div className="rounded-md border-gray-500 m-2 p-2">
                <h3 className="flex ustify-around">Add Expense</h3>
                <form className="flex flex-col gap-2 mt-5">
                    <TextField
                        type="number"
                        id="outlined-basic"
                        label="Amount"
                        value={inputs.amount}
                        variant="outlined"
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
                            <div
                                className="flex flex-row justify-between mr-4 pr-2"
                                key={option.id}
                            >
                                <MenuItem value={option.id}>
                                    {option.name}
                                </MenuItem>
                                <div>
                                    <Button
                                        aria-label="edit"
                                        onClick={() =>
                                            onEditCategory(option.id)
                                        }
                                    >
                                        <EditIcon />
                                    </Button>
                                    <Button
                                        aria-label="delete"
                                        onClick={() =>
                                            onDeleteCategory(option.id)
                                        }
                                    >
                                        <DeleteIcon />
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </TextField>
                    <TextField
                        id="outlined-basic"
                        label="Expense Name"
                        variant="outlined"
                        value={inputs.name}
                        required
                        onChange={(e) => {
                            setInputs({
                                ...inputs,
                                name: e.target.value,
                            });
                        }}
                    />

                    <TextField
                        id="outlined-basic"
                        label="Description"
                        variant="outlined"
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
    );
};

export default CreateExpense;
