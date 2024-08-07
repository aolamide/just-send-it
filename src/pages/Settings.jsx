import Person from "../assets/icons/person.svg";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../app/userSlice.js";


const SettingsPage = () => {
    const user = useSelector(state => state.user.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logoutUser = () => {
        dispatch(logout());
        navigate('/start');
    }
    return(
        <div className="p-4">
            <img className="m-auto h-32 w-32" src={Person} alt="person"/>

            <div className="mt-4">
                <p className="text-zinc-600 text-sm">First Name</p>
                <p className="text-lg">{user.first_name}</p>
            </div>

            <div className="mt-4">
                <p className="text-zinc-600 text-sm">Last Name</p>
                <p className="text-lg">{user.last_name}</p>
            </div>

            <div className="mt-4">
                <p className="text-zinc-600 text-sm">Email</p>
                <p className="text-lg">{user.email}</p>
            </div>

            <div className="my-8">
                <button onClick={logoutUser} className="text-red-600 text-xl">Logout</button>
            </div>
        </div>
    )
}

export default SettingsPage;
