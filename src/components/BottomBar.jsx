import HomeIcon from '../assets/icons/home.svg'
import MoreIcon from '../assets/icons/more.svg'
import OrdersIcon from '../assets/icons/orders.svg'
import {Link} from "react-router-dom";

const BottomBar = () => {
    return(
        <div className="flex justify-between px-4 bg-white fixed bottom-0 w-full">
            <Link to="/home" className="flex flex-col items-center">
                <img className="w-8" src={HomeIcon} alt="Home"/>
                <p className="text-[#828282] text-sm">Home</p>
            </Link>
            <Link to="/my-deliveries" className="flex flex-col items-center">
                <img className="w-8" src={OrdersIcon} alt="Deliveries"/>
                <p className="text-[#828282] text-sm">Deliveries</p>
            </Link>
            <Link to="/settings" className="flex flex-col items-center">
                <img className="w-8" src={MoreIcon} alt="More"/>
                <p className="text-[#828282] text-sm">More</p>
            </Link>
        </div>
    )
}

export default BottomBar;