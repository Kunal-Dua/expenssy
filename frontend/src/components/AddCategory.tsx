import React, { useState } from "react";
import { TextField } from "@mui/material";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useSetRecoilState } from "recoil";
import { categoriesState } from "../store/atoms/categoryAtom";

const CreateExpense = () => {
    const [inputs, setInputs] = useState({
        name: "",
    });

    const setCategoryState = useSetRecoilState(categoriesState);

    async function OnSubmission(e: React.FormEvent) {
        e.preventDefault();
        const res = await axios.post(
            `${BACKEND_URL}/api/v1/tracker/addCategory`,
            inputs,
            {
                headers: {
                    Authorization: localStorage.getItem("token"),
                },
            },
        );
        setCategoryState((prev) => [...prev, res.data.category]);
    }

    return (
        <div className="flex-1">
            <div className="rounded-md border-gray-500 m-2 p-2">
                <h3 className="flex ustify-around mb-5">Add Category</h3>
                <form
                    className="flex flex-col gap-2 mt-5"
                    onSubmit={OnSubmission}
                >
                    <TextField
                        id="outlined-basic"
                        label="Category Name"
                        variant="outlined"
                        value={inputs.name}
                        required
                        onChange={(e) => {
                            setInputs({
                                name: e.target.value,
                            });
                        }}
                    />
                    <button className="border bg-green-600 border-green-600 text-sm rounded-lg p-2.5 text-white block">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateExpense;
