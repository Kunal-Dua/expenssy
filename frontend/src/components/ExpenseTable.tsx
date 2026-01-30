import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { useSetRecoilState } from "recoil";
import { expenseState } from "../store/atoms/expenseAtom";
import type { Expenses } from "../types/expenses";


type ExpenseProp = {
    expenses: Expenses[];
};

const ExpenseTable = ({ expenses }: ExpenseProp) => {
    const setExpenses = useSetRecoilState(expenseState);

    const deleteExpense = async (expenseId: string) => {
        try {
            await axios.delete(
                `${import.meta.env.VITE_BACKEND_URL}/api/v1/tracker/deleteExpense/${expenseId}`,
                {
                    headers: {
                        Authorization: localStorage.getItem("token"),
                    },
                },
            );
            setExpenses((prev) => prev.filter((item) => item.id !== expenseId));
        } catch (err) {
            console.error(err);
        }
    };




    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="center">Category</TableCell>
                        <TableCell align="center">Amount</TableCell>
                        <TableCell align="center">Description</TableCell>
                        <TableCell align="center">Date</TableCell>
                        <TableCell align="center"></TableCell>
                        <TableCell align="center"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {expenses.map((expense: Expenses) => (
                        <TableRow
                            key={expense.id}
                            sx={{
                                "&:last-child td, &:last-child th": {
                                    border: 0,
                                },
                            }}
                        >
                            <TableCell align="center">
                                {expense.expenseName}
                            </TableCell>
                            <TableCell
                                component="th"
                                scope="row"
                                align="center"
                            >
                                {expense.categoryName}
                            </TableCell>
                            <TableCell align="center">
                                {expense.amount}
                            </TableCell>
                            <TableCell align="center">
                                {expense.expenseDescription}
                            </TableCell>
                            <TableCell align="center">
                                {new Date(
                                    Math.max(
                                        new Date(expense.dateCreated).getTime(),
                                        new Date(expense.dateUpdated).getTime(),
                                    ),
                                ).toLocaleDateString()}
                            </TableCell>
                            <TableCell align="center">
                                <div>
                                    <EditIcon />
                                </div>
                            </TableCell>
                            <TableCell align="center">
                                <div onClick={() => deleteExpense(expense.id)}>
                                    <DeleteIcon />
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ExpenseTable;
