import { useRecoilValue, useSetRecoilState } from "recoil";
import { authState } from "../store/atoms/authAtom";
import { useEffect } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const useAuthInit = () => {
    const setAuth = useSetRecoilState(authState);
    const s = useRecoilValue(authState);
    console.log("vcalled");

    useEffect(() => {
        axios
            .get(`${BACKEND_URL}/api/v1/user/auth/me`)
            .then((res) => {
                setAuth({
                    user: res.data.user,
                    isAuthenticated: true,
                });
            })
            .catch((error) => {
                console.log(error);

                setAuth({
                    user: null,
                    isAuthenticated: false,
                });
            });
    }, []);
    console.log("is true " + s.isAuthenticated);
};
