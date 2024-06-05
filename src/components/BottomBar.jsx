import HomeIcon from '../assets/icons/home.svg'
import MoreIcon from '../assets/icons/more.svg'
import OrdersIcon from '../assets/icons/orders.svg'

const BottomBar = () => {
    return(
        <div className="flex justify-between px-4 bg-white fixed bottom-0 w-full">
            <a href="/home" className="flex flex-col items-center">
                <img className="w-8" src={HomeIcon} alt="Home"/>
                <p className="text-[#828282] text-sm">Home</p>
            </a>
            <a className="flex flex-col items-center">
                <img className="w-8" src={OrdersIcon} alt="Home"/>
                <p className="text-[#828282] text-sm">My Orders</p>
            </a>
            <a className="flex flex-col items-center">
                <img className="w-8" src={MoreIcon} alt="Home"/>
                <p className="text-[#828282] text-sm">More</p>
            </a>
        </div>
    )
}

export default BottomBar;