import React, { useEffect, useState } from "react";
import { MenuItem, TextField } from "@mui/material";
import axios from "axios";
import { BACKEND_URL } from "../config";

interface categoryDetails {
    id: string;
    name: string;
}

const CreateExpense = () => {
    const [inputs, setInputs] = useState({
        categoryId: "",
        name: "",
        amount: 0,
        description: "",
    });

    const [category, setCategory] = useState<categoryDetails[]>([]);

    useEffect(() => {
        axios
            .get(`${BACKEND_URL}/api/v1/tracker/allCategory`, {
                headers: {
                    Authorization: localStorage.getItem("token"),
                },
            })
            .then((res) => {
                setCategory(res.data);
            });
    }, []);

    async function OnSubmission(e: React.FormEvent) {
        e.preventDefault();
        await axios.post(`${BACKEND_URL}/api/v1/tracker/addExpense`, inputs, {
            headers: {
                Authorization: localStorage.getItem("token"),
            },
        });
        setInputs({
            categoryId: "",
            name: "",
            amount: 0,
            description: "",
        });
    }

    return (
        <div className="flex-1">
            <div className="rounded-md border-gray-500 m-2 p-2 flex flex-row justify-around items-center gap-1">
                <form onSubmit={OnSubmission}>
                    <TextField
                        id="outlined-select-currency"
                        select
                        label="Category"
                        defaultValue=""
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
                        required
                        onChange={(e) => {
                            setInputs({
                                ...inputs,
                                name: e.target.value,
                            });
                        }}
                    />
                    <TextField
                        type="number"
                        id="outlined-basic"
                        label="Amount"
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
                        id="outlined-basic"
                        label="Description"
                        variant="outlined"
                        onChange={(e) => {
                            setInputs({
                                ...inputs,
                                description: e.target.value,
                            });
                        }}
                    />
                    <button className="border bg-blue-600 border-blue-600 text-sm rounded-lg p-2.5 text-white block">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateExpense;
