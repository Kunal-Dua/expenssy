import { useSetRecoilState } from "recoil";
import { authState } from "../store/atoms/authAtom";
import { useEffect } from "react";
import axios from "axios";

export const useAuthInit = () => {
    const setAuth = useSetRecoilState(authState);

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
            setAuth({
                user: null,
                isAuthenticated: false,
            });
            return;
        }

        axios
            .get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/user/auth/me`, {
                headers: {
                    Authorization: token,
                },
            })
            .then((res) => {
                setAuth({
                    user: res.data.user,
                    isAuthenticated: true,
                });
            })
            .catch(() => {
                localStorage.removeItem("token");
                setAuth({
                    user: null,
                    isAuthenticated: false,
                });
            });
    }, [setAuth]);
};
