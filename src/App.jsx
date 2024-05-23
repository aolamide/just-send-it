import {useEffect} from "react";

function App() {
    useEffect(() => {

    }, []);
    return (
        <a href="/home">
            <div className="bg-[#1E6D80] h-screen">
                <div
                    className="h-full w-full bg-no-repeat bg-cover bg-[url('./assets/splash-white.png')] flex flex-col justify-center items-center">
                    <img alt="Logo" className="w-35 h-35" src="/logo.svg"/>
                    <h1 className="font-akaya font-semibold text-3xl">Just Send It</h1>
                </div>
            </div>
        </a>

    );
}

export default App

