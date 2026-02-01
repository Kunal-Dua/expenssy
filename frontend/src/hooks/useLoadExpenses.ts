import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { expenseState } from "../store/atoms/expenseAtom";
import axios from "axios";

export const useLoadExpenses = () => {
    const setExpenses = useSetRecoilState(expenseState);
    const token = localStorage.getItem("token");

    useEffect(() => {
        if (!token) {
            return;
        }
        axios
            .get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/tracker/`, {
                headers: {
                    Authorization: localStorage.getItem("token"),
                },
            })
            .then((res) => {
                setExpenses(res.data);
            })
            .catch((e) => {
                console.error(e);
            });
    }, [token]);
};

export default useLoadExpenses;
