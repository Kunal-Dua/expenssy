import React, { useState } from "react";
import { MenuItem, TextField } from "@mui/material";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { categoriesState } from "../store/atoms/categoryAtom";

const CreateExpense = () => {
    const [inputs, setInputs] = useState({
        categoryId: "",
        name: "",
        amount: 0,
        description: "",
    });

    const category = useRecoilValue(categoriesState);

    async function OnSubmission(e: React.FormEvent) {
        e.preventDefault();
        if (inputs.amount > 0 && inputs.name != "") {
            await axios.post(
                `${import.meta.env.VITE_BACKEND_URL}/api/v1/tracker/addExpense`,
                inputs,
                {
                    headers: {
                        Authorization: localStorage.getItem("token"),
                    },
                },
            );
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
                        id="outlined-select-currency"
                        select
                        label="Category"
                        value={inputs.categoryId}
                        required
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
                            <MenuItem key={option.id} value={option.id}>
                                {option.name}
                            </MenuItem>
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
