import {Link, useNavigate} from "react-router-dom";
import {setUserType} from "../app/userSlice.js";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

const Start = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user);
    const navigate = useNavigate();
    useEffect(() => {
        if(user) {
            navigate('/home');
        }
    }, []);
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
