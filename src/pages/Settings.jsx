import Person from "../assets/icons/person.svg";
import {Link} from "react-router-dom";


const SettingsPage = () => {
    return(
        <div className="p-4">
            <img className="m-auto h-32 w-32" src={Person} alt="person"/>

            <div className="p-4">
                <Link to="/start" className="text-red-600 text-xl">Logout</Link>
            </div>
        </div>
    )
}

export default SettingsPage;