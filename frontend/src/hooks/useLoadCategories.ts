import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoriesState } from "../store/atoms/categoryAtom";
import axios from "axios";
import { authState } from "../store/atoms/authAtom";

export const useLoadCategories = () => {
    const setCategories = useSetRecoilState(categoriesState);
    const { isAuthenticated } = useRecoilValue(authState);

    useEffect(() => {
        if (!isAuthenticated) {
            return;
        }
        axios
            .get(
                `${import.meta.env.VITE_BACKEND_URL}/api/v1/tracker/allCategory`,
                {
                    headers: {
                        Authorization: localStorage.getItem("token"),
                    },
                },
            )
            .then((res) => {
                setCategories(res.data);
            })
            .catch((e) => {
                console.error(e);
            });
    }, []);
};
