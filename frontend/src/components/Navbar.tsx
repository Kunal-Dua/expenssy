import { authState } from "../store/atoms/authAtom";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
    const { isAuthenticated } = useRecoilValue(authState);
    const reset = useResetRecoilState(authState);

    return (
        <div className="flex justify-between m-3 p-2">
            <div>Expenssy</div>
            <div className="flex justify-around">
                {isAuthenticated ? (
                    <div className="flex justify-center items-center gap-2">
                        <div>
                            <Avatar
                                alt="Remy Sharp"
                                // src="/static/images/avatar/1.jpg"
                            />
                        </div>
                        <div>
                            <button onClick={reset}>Logout</button>
                            localStorage.removeItem("token");
                            <Link to="/signin"></Link>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="m-1 p-1.5 ">
                            <Link to={"/signIn"}>Sign In</Link>
                        </div>
                        <div className="m-1 p-1.5 bg-blue-600 text-white rounded-md border-r-blue-600">
                            <Link to={"/signUp"}>Sign Up</Link>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navbar;
