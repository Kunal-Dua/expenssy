import { Button, MenuItem, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import TextBox from "./TextBox";
import type { FormProps } from "../types/types";
import { useRecoilValue } from "recoil";
import { categoriesState } from "../store/atoms/categoryAtom";
import { useState } from "react";
import PublishIcon from "@mui/icons-material/Publish";

const Form = ({
    inputs,
    setInputs,
    onSubmission,
    onEditCategory,
    onDeleteCategory,
    Editable,
}: FormProps) => {
    const category = useRecoilValue(categoriesState);
    const [editCategoryField, setEditCategoryField] = useState(false);
    const [editCategory, setEditCategory] = useState("");

    return (
        <div className="flex-1">
            <div className="rounded-md border-gray-500 m-2 p-2">
                <h3 className="flex ustify-around">Add Expense</h3>
                <form className="flex flex-col gap-2 mt-5">
                    <TextBox
                        type="number"
                        id="outlined-basic-amount"
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
                        value={inputs.categoryId || ""}
                        required
                        select
                        onChange={(e) =>
                            setInputs({ ...inputs, categoryId: e.target.value })
                        }
                        sx={{ minWidth: 200 }}
                    >
                        {category.map((option) => (
                            <MenuItem key={option.id} value={option.id}>
                                {option.name}
                            </MenuItem>
                        ))}
                    </TextField>
                    {inputs.categoryId && (
                        <div style={{ marginTop: 8 }}>
                            {!editCategoryField && Editable && (
                                <Button
                                    onClick={() => setEditCategoryField(true)}
                                    startIcon={<EditIcon />}
                                >
                                    Edit
                                </Button>
                            )}
                            {!editCategoryField && Editable && (
                                <Button
                                    onClick={() =>
                                        onDeleteCategory(inputs.categoryId)
                                    }
                                    startIcon={<DeleteIcon />}
                                >
                                    Delete
                                </Button>
                            )}
                            {editCategoryField && Editable && (
                                <div className="flex gap-2">
                                    <TextBox
                                        id="outlined-basic-name"
                                        label="Enter Category Name"
                                        value={editCategory}
                                        required
                                        onChange={(e) => {
                                            setEditCategory(e.target.value);
                                        }}
                                    />

                                    <button
                                        type="button"
                                        onClick={() => {
                                            onEditCategory(
                                                inputs.categoryId,
                                                editCategory,
                                            );
                                            setEditCategoryField(false);
                                        }}
                                    >
                                        <PublishIcon />
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                    <TextBox
                        id="outlined-basic-name"
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
                        id="outlined-basic-dexcription"
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
                        onClick={onSubmission}
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Form;
