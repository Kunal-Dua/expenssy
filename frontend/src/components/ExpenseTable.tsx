import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

interface Expenses {
    amount: number;
    categoryId: string;
    categoryName: string;
    dateCreated: string;
    dateUpdated: string;
    expenseDescription: string;
    expenseName: string;
    id: string;
    userId: string;
}

type ExpenseProp={
    expenses:Expenses[]
}

const ExpenseTable = ({ expenses }: ExpenseProp) => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Category</TableCell>
                        <TableCell align="center">Name</TableCell>
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
                            <TableCell
                                component="th"
                                scope="row"
                                align="center"
                            >
                                {expense.categoryName}
                            </TableCell>
                            <TableCell align="center">
                                {expense.expenseName}
                            </TableCell>
                            <TableCell align="center">
                                {expense.amount}
                            </TableCell>
                            <TableCell align="center">
                                {expense.expenseDescription}
                            </TableCell>
                            <TableCell align="center">
                                {expense.dateCreated}
                            </TableCell>
                            <TableCell align="center"></TableCell>
                            <TableCell align="center"></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ExpenseTable;
