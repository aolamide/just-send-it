import PackageRequestTop from "../components/PackageRequestTop.jsx";
import RequestFormInput from "../components/RequestFormInput.jsx";
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <div className="py-2">
            <PackageRequestTop title="Login" link="/start"/>

            <form className="px-3 mt-7">
                <RequestFormInput placeholder="Enter username" label="Username" name="username"/>
                <RequestFormInput placeholder="*******" label="Password" name="password"
                                  inputType="password"/>

                <button type="button" className="w-full bg-primary text-white p-4 rounded-lg mt-20">
                    <Link to="/home">Login </Link>
                </button>
            </form>
        </div>
    )
}

export default Login