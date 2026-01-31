import React, { useState } from "react";
import axios from "axios";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoriesState } from "../store/atoms/categoryAtom";
import TextBox from "./TextBox";
import { authState } from "../store/atoms/authAtom";

const CreateExpense = () => {
    const [inputs, setInputs] = useState({
        name: "",
    });

    const setCategoryState = useSetRecoilState(categoriesState);
    const { isAuthenticated } = useRecoilValue(authState);

    async function OnSubmission(e: React.FormEvent) {
        e.preventDefault();
        if (!isAuthenticated) {
            alert("Please log in");
            return;
        }
        const res = await axios.post(
            `${import.meta.env.VITE_BACKEND_URL}/api/v1/tracker/addCategory`,
            inputs,
            {
                headers: {
                    Authorization: localStorage.getItem("token"),
                },
            },
        );
        setCategoryState((prev) => [...prev, res.data.category]);
        setInputs({
            name: "",
        });
    }

    return (
        <div className="flex-1">
            <div className="rounded-md border-gray-500 m-2 p-2">
                <h3 className="flex ustify-around mb-5">Add Category</h3>
                <form
                    className="flex flex-col gap-2 mt-5"
                    onSubmit={OnSubmission}
                >
                    <TextBox
                        id="outlined-basic"
                        label="Category Name"
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
