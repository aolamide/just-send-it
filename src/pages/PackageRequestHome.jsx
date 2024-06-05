import PackageRequestTop from "../components/PackageRequestTop.jsx";
import SendingLocation from "../assets/icons/location1.svg"
import DestinationLocation from "../assets/icons/location2.svg"
import ArrowRight from "../assets/icons/arrow-right.svg"
import {Link} from "react-router-dom";

const PackageRequestHome = () => {
    return (
        <div className="py-2">
            <PackageRequestTop title="Send Package Request" link="/home"/>

            <div className="px-3">
                <PackageRequestSection image={SendingLocation} textMain="Pick Up Address" textSub="Enter pickup details"
                                       link="pickup"/>
                <PackageRequestSection image={DestinationLocation} textMain="Delivery Address"
                                       textSub="Enter delivery details" link="destination"/>

                <button disabled className="w-full text-white p-4 rounded-lg mt-20 cursor-not-allowed bg-gray-300">
                    Continue
                </button>
            </div>


        </div>
    )
}

const PackageRequestSection = ({image, textMain, textSub, link}) => {
    return (
        <Link to={`/send-package/${link}`}
           className="flex items-center gap-4 border border-[#F2F2F2] bg-[#FDFBFB] rounded-sm p-4 my-4">
            <img src={image} alt="location"/>
            <div className="flex-1">
                <h2 className="text-[#6B6B6B]">{textMain}</h2>
                <h3 className="font-semibold">{textSub}</h3>
            </div>
            <img className="h-10" src={ArrowRight} alt="go"/>
        </Link>
    )
}

export default PackageRequestHome