import React, { useState } from "react";
import axios from "axios";
import { useSetRecoilState } from "recoil";
import { categoriesState } from "../store/atoms/categoryAtom";
import { expenseState } from "../store/atoms/expenseAtom";
import Form from "./Form";

const CreateExpense = () => {
    const [inputs, setInputs] = useState<Inputs>({
        expenseId: "",
        categoryId: "",
        name: "",
        amount: 1,
        description: "",
    });

    const setCategory = useSetRecoilState(categoriesState);
    const setExpenses = useSetRecoilState(expenseState);

    const onEditCategory = async (categoryid: string, name: string) => {
        try {
            await axios.put(
                `${import.meta.env.VITE_BACKEND_URL}/api/v1/tracker/updateCategory`,
                { categoryid, name },
                {
                    headers: {
                        Authorization: localStorage.getItem("token"),
                    },
                },
            );
            setCategory((prev) =>
                prev.map((cat) =>
                    cat.id === categoryid ? { ...cat, name } : cat,
                ),
            );
            setExpenses((prev) =>
                prev.map((exp) =>
                    exp.categoryId === categoryid
                        ? { ...exp, categoryName: name }
                        : exp,
                ),
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

    async function onSubmission(e: React.FormEvent) {
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
            setExpenses((prev) => [...prev, res.data.expense as Expenses]);
            setInputs({
                expenseId: "",
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
        <Form
            inputs={inputs}
            setInputs={setInputs}
            onEditCategory={onEditCategory}
            onSubmission={onSubmission}
            onDeleteCategory={onDeleteCategory}
            Editable={true}
        />
    );
};

export default CreateExpense;
