import {useEffect} from "react";
import {Link} from "react-router-dom";

function App() {
    useEffect(() => {

    }, []);
    return (
        <Link to="/home">
            <div className="bg-primary h-screen">
                <div
                    className="h-full w-full bg-no-repeat bg-cover bg-[url('./assets/splash-white.png')] flex flex-col justify-center items-center">
                    <img alt="Logo" className="w-35 h-35" src="/logo.svg"/>
                    <h1 className="font-akaya font-semibold text-3xl">Just Send It</h1>
                </div>
            </div>
        </Link>

    );
}

export default App

