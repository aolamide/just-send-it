import DeliveryManWithBox from '../assets/icons/delivery-man-with-box.svg'
import Box from '../assets/icons/box.svg'
import ArrowRight from '../assets/icons/arrow-right.svg'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const Home = () => {
    const role = useSelector((state) => state.user.role);
    if(!role) return <div></div>
    else if(role === "customer") {
        return (
            <div className="p-4 h-screen">
                <p className='text-3xl my-5 font-josefinSans'>Have a package to send or received? Prepare your package, and let us just send
                    it.</p>

                <Link to="/send-package" className="border border-gray-500 rounded flex gap-2 p-5 mt-5 items-center">
                    <img src={Box} alt="box"/>
                    <p>Have a rider deliver or pickup a package for you</p>
                    <img src={ArrowRight} className="h-10" alt="Go"/>
                </Link>

                <img className="w-full h-[30vh]" src={DeliveryManWithBox} alt="delivery man"/>
                <p className="font-inter text-xl">Send items safely, deliver fast </p>
                <p className="font-inter font-light text-sm text-[#575454]">Send, track and get notified</p>
            </div>
        )
    } else {
        return (
            <div className="p-4 h-screen">
                <p className='text-3xl my-5 font-josefinSans'>Welcome Awesome Rider!</p>
                <p className='text-3xl my-5 font-josefinSans'>Ready to deliver greatness to our customers?</p>

                <Link to="/my-deliveries" className="border border-gray-500 rounded flex gap-2 p-5 mt-5 items-center">
                    <img src={Box} alt="box"/>
                    <p>See your assigned deliveries</p>
                    <img src={ArrowRight} className="h-10" alt="Go"/>
                </Link>

                <img className="w-full h-[30vh]" src={DeliveryManWithBox} alt="delivery man"/>
                <p className="font-inter text-xl">Deliver items safe and fast. </p>
                <p className="font-inter font-light text-sm text-[#575454]">Scan QR code on successful deliveries.</p>
            </div>
        )
    }

}

export default Home;
