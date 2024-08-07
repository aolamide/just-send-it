import {Link} from "react-router-dom";
import {setUserType} from "../app/userSlice.js";
import {useDispatch} from "react-redux";

const Start = () => {
    const dispatch = useDispatch();
    return (
        <>
            <div className="bg-primary h-screen">
                <div
                    className="h-full w-full bg-no-repeat bg-cover bg-[url('./assets/splash-white.png')] flex flex-col justify-center items-center">
                    <img alt="Logo" className="w-35 h-35" src="/logo.svg"/>
                    <h1 className="font-akaya font-semibold text-3xl">Just Send It</h1>

                    <div className="flex flex-col">
                        <button onClick={() => dispatch(setUserType('customer'))} className="bg-primary text-white p-3 rounded-md my-2 text-lg"><Link to='/login'>Login as Customer</Link></button>
                        <button onClick={() => dispatch(setUserType('rider'))} className="bg-primary text-white p-3 rounded-md my-2 text-lg"><Link to='/login'> Login as Rider</Link></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Start;
