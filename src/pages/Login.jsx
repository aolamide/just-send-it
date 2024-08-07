import PackageRequestTop from "../components/PackageRequestTop.jsx";
import RequestFormInput from "../components/RequestFormInput.jsx";
import {useState} from "react";
import handleErrors from "../utils/handleErrors.js";
import {useCustomerLoginMutation, useRiderLoginMutation} from "../app/api.js";
import toast from "react-hot-toast";
import {useDispatch, useSelector} from 'react-redux';
import { login } from "../app/userSlice.js";
import {Link, useNavigate} from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginCustomer, { isLoading }] = useCustomerLoginMutation();
    const [loginRider, { isLoading: riderLoginLoading }] = useRiderLoginMutation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const role = useSelector((state) => state.user.role);

    const loginUser = async (e) => {
        e.preventDefault();
        try {
            const data = {
                email: username,
                password
            };
            let res;
            if(role === 'customer') {
               res = await loginCustomer(data).unwrap();
            } else {
                res = await loginRider(data).unwrap();
            }

            dispatch(login(res.data));
            toast.success(`Login successful`);
            navigate('/home');
        } catch(err) {
            handleErrors(err);
        }
    }

    return (
        <div className="py-2">
            <PackageRequestTop title={`Login (${role})`} link="/start"/>

            <form onSubmit={loginUser} className="px-3 mt-7">
                <RequestFormInput value={username} setValue={setUsername} placeholder="Enter email" inputType="email" label="Email Address" name="email"/>
                <RequestFormInput value={password} setValue={setPassword} placeholder="*******" label="Password" name="password"
                                  inputType="password"/>

                <p className="text-zinc-600">Don't have an account? <Link className="text-green-500 underline" to={'/register'}>Sign up</Link></p>

                <button disabled={isLoading} className="w-full bg-primary text-white p-4 rounded-lg mt-20">
                    {isLoading || riderLoginLoading ? "..." : "Login"}
                </button>
            </form>
        </div>
    )
}

export default Login
