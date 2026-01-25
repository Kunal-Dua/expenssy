import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Tracker from "./pages/Tracker";
import { useAuthInit } from "./hooks/useAuthInit";
import { useLoadCategories } from "./hooks/useLoadCategories";

function App() {
    useAuthInit();
    useLoadCategories();
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/signup" element={<Signup />}></Route>
                    <Route path="/signin" element={<Signin />}></Route>
                    <Route path="/" element={<Tracker />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
