import PackageRequestTop from "../components/PackageRequestTop.jsx";
import RequestFormInput from "../components/RequestFormInput.jsx";
import {useState} from "react";
import handleErrors from "../utils/handleErrors.js";
import {
    useCustomerRegisterMutation,
    useRiderRegisterMutation
} from "../app/api.js";
import toast from "react-hot-toast";
import {useDispatch, useSelector} from 'react-redux';
import { login } from "../app/userSlice.js";
import {Link, useNavigate} from "react-router-dom";

const Register = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [registerCustomer, { isLoading }] = useCustomerRegisterMutation();
    const [registerRider, { isLoading: riderRegisterLoading }] = useRiderRegisterMutation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const role = useSelector((state) => state.user.role);

    const loginUser = async (e) => {
        e.preventDefault();
        try {
            const data = {
                email,
                password,
                first_name: firstName,
                last_name: lastName,
            };
            if(role === 'rider') {
                data.phone_number = phone
            }
            let res;
            if(role === 'customer') {
                res = await registerCustomer(data).unwrap();
            } else {
                res = await registerRider(data).unwrap();
            }

            dispatch(login(res.data));
            toast.success(`Signup successful`);
            navigate('/home');
        } catch(err) {
            handleErrors(err);
        }
    }

    return (
        <div className="py-2">
            <PackageRequestTop title={`Register (${role})`} link="/login"/>

            <form onSubmit={loginUser} className="px-3 mt-7">
                <RequestFormInput value={firstName} setValue={setFirstName} placeholder="Enter First name" label="First Name" name="firstName"/>
                <RequestFormInput value={lastName} setValue={setLastName} placeholder="Enter Last name" label="Last Name" name="lastName"/>
                <RequestFormInput value={email} setValue={setEmail} placeholder="Enter email" inputType="email" label="Email Address" name="email"/>
                { role === 'rider' &&<RequestFormInput value={phone} setValue={setPhone} placeholder="Enter phone number" label="Phone Number" name="phone"
                                  inputType="tel"/> }
                <RequestFormInput value={password} setValue={setPassword} placeholder="*******" label="Password" name="password"
                                  inputType="password"/>

                <p className="text-zinc-600">Already have an account? <Link className="text-green-500 underline" to={'/login'}>Login</Link></p>

                <button disabled={isLoading} className="w-full bg-primary text-white p-4 rounded-lg mt-20">
                    {isLoading || riderRegisterLoading ? "..." : "Sign Up"}
                </button>
            </form>
        </div>
    )
}

export default Register
