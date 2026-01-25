import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { categoriesState } from "../store/atoms/categoryAtom";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const useLoadCategories = () => {
    const setCategories = useSetRecoilState(categoriesState);

    useEffect(() => {
        axios
            .get(`${BACKEND_URL}/api/v1/tracker/allCategory`, {
                headers: {
                    Authorization: localStorage.getItem("token"),
                },
            })
            .then((res) => {
                setCategories(res.data);
            })
            .catch((e) => {
                console.error(e);
            });
    }, []);
};
