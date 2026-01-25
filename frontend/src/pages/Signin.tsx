import { useState, type ChangeEvent } from "react";
import { Quote } from "../components/Quote";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { authState } from "../store/atoms/authAtom";
import { useSetRecoilState } from "recoil";

const Signin = () => {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
    });
    const setAuth = useSetRecoilState(authState);

    async function sendRequest() {
        try {
            const res = await axios.post(
                `${BACKEND_URL}/api/v1/user/signin`,
                inputs,
            );
            const jwt = res.data;

            localStorage.setItem("token", jwt);
            setAuth({
                isAuthenticated: true,
                user: res.data.user,
            });
            navigate("/");
        } catch (err) {
            alert("Error while signing in " + err);
        }
    }

    return (
        <div>
            <div className="grid grid-cols-2">
                <div>
                    <div className="h-screen flex justify-center flex-col">
                        <div className="flex justify-center">
                            <div>
                                <div className="text-3xl font-extrabold">
                                    Create account
                                </div>
                                Don't have an account?
                                <Link className="pl-2 underline" to={"/signin"}>
                                    Sign up
                                </Link>
                            </div>
                            <div className="pt-8">
                                <LabelledInput
                                    label="Email"
                                    placeholder="Enter Email"
                                    onChange={(e) => {
                                        setInputs({
                                            ...inputs,
                                            email: e.target.value,
                                        });
                                    }}
                                />
                                <LabelledInput
                                    label="Password"
                                    placeholder="Enter Password"
                                    type="password"
                                    onChange={(e) => {
                                        setInputs({
                                            ...inputs,
                                            password: e.target.value,
                                        });
                                    }}
                                />
                                <button
                                    onClick={sendRequest}
                                    type="button"
                                    className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                                >
                                    Sign in
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:block">
                    <Quote />
                </div>
            </div>
        </div>
    );
};

interface LabelledInputType {
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}

function LabelledInput({
    label,
    placeholder,
    onChange,
    type,
}: LabelledInputType) {
    return (
        <div>
            <label className="block mb-2 text-sm text-black font-semibold pt-4">
                {label}
            </label>
            <input
                onChange={onChange}
                type={type || "text"}
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder={placeholder}
                required
            />
        </div>
    );
}

export default Signin;
