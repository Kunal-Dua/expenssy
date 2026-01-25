import { useSetRecoilState } from "recoil";
import { authState } from "../store/atoms/authAtom";
import { useEffect } from "react";
import axios from "axios";

export const useAuthInit = () => {
    const setAuth = useSetRecoilState(authState);
    const token = localStorage.getItem("token");

    if (token) {
        useEffect(() => {
            axios
                .get(
                    `${import.meta.env.VITE_BACKEND_URL}/api/v1/user/auth/me`,
                    {
                        headers: {
                            Authorization: token,
                        },
                    },
                )
                .then((res) => {
                    setAuth({
                        user: res.data.user,
                        isAuthenticated: true,
                    });
                })
                .catch(() => {
                    localStorage.removeItem(token);
                    setAuth({
                        user: null,
                        isAuthenticated: false,
                    });
                });
        }, []);
    } else {
        setAuth({
            user: null,
            isAuthenticated: false,
        });
    }
};
