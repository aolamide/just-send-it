import DeliveryManWithBox from '../assets/icons/delivery-man-with-box.svg'
import Box from '../assets/icons/box.svg'
import BottomBar from "../components/BottomBar.jsx";

const Home = () => {
    return (
        <>
        <div className="p-4 h-screen">
            <p className='text-3xl my-5'>Have a package to send or received? Prepare your package, and let us just send
                it.</p>

            <div className="border border-gray-500 rounded flex gap-2 p-5 mt-5">
                <img src={Box} alt="box"/>
                <p>Have a rider deliver or pickup a package for you</p>
            </div>

            <img className="w-full h-[30vh]" src={DeliveryManWithBox} alt="delivery man"/>
            <p className="font-inter text-2xlxl">Send items safely, deliver fast </p>
            <p className="font-inter text-xl">send, track and get notified</p>


        </div>
    <div className="fixed bottom-0 w-full">
        <BottomBar/>
    </div>
            </>
)
}

export default Home;