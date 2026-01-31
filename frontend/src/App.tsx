import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Tracker from "./pages/Tracker";
import { useAuthInit } from "./hooks/useAuthInit";
import { useLoadCategories } from "./hooks/useLoadCategories";
import Expenses from "./pages/Expenses";
import EditExpense from "./pages/EditExpense";
import useLoadExpenses from "./hooks/useLoadExpenses";

function App() {
    useAuthInit();
    useLoadCategories();
    useLoadExpenses();
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/signup" element={<Signup />}></Route>
                    <Route path="/signin" element={<Signin />}></Route>
                    <Route path="/" element={<Tracker />}></Route>
                    <Route path="/expenses" element={<Expenses />}></Route>
                    <Route
                        path="/editExpenses"
                        element={<EditExpense />}
                    ></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
