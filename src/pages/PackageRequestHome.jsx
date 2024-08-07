import PackageRequestTop from "../components/PackageRequestTop.jsx";
import SendingLocation from "../assets/icons/location1.svg"
import DestinationLocation from "../assets/icons/location2.svg"
import ArrowRight from "../assets/icons/arrow-right.svg"
import {Link} from "react-router-dom";
import {useCreateDeliveryMutation, useGetDeliveryAreasMutation, useGetDeliveryRateMutation} from "../app/api.js";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setAreas} from "../app/addressSlice.js";
import { BottomSheet } from 'react-spring-bottom-sheet'
import 'react-spring-bottom-sheet/dist/style.css'
import Box from '../assets/icons/box.svg'
import handleErrors from "../utils/handleErrors.js";

const PackageRequestHome = () => {
    const [fetchAreas , { isLoading }] = useGetDeliveryAreasMutation();
    const [fetchRate, { isLoading: rateLoading }] = useGetDeliveryRateMutation();
    const [createDelivery, { isLoading: createDeliveryLoading }] = useCreateDeliveryMutation();
    const [rate, setRate] = useState(null);
    const [sheetOpen, setSheetOpen] = useState(false);
    const { pickupAddress, destinationAddress } = useSelector(state => state.address);
    const dispatch = useDispatch();
    const getAreas = async ()  => {
        try {
            const data = await fetchAreas().unwrap();
            dispatch(setAreas(data));
        } catch {
            console.log("Could not fetch areas.");
        }
    }
    const calculateRate = async () => {
        try {
            const data = await fetchRate({ source: pickupAddress.area, destination : destinationAddress.area }).unwrap();
            setRate(data.rate);
            setSheetOpen(true);
        } catch(err) {
            console.log("Could not calculate rate.");
            handleErrors(err);
        }
    }

    const submitDelivery = async () => {
        try {
            const data = await createDelivery({ pickup: { ...pickupAddress, area: +pickupAddress.area}, destination : { ...destinationAddress, area: +destinationAddress.area} }).unwrap();
            window.location.href = data.authorization_url;
        } catch(err) {
            handleErrors(err);
        }
    }

    useEffect( () => {
        getAreas()
    }, []);

    return (
        <div className="py-2">
            <PackageRequestTop title="Send Package Request" link="/home"/>

            <div className="px-3">
                <PackageRequestSection image={SendingLocation} textMain="Pick Up Address" textSub={pickupAddress.address || "Enter pickup details"}
                                       link="pickup"/>
                <PackageRequestSection image={DestinationLocation} textMain="Delivery Address"
                                       textSub={destinationAddress.address || "Enter delivery details"} link="destination"/>

                <button onClick={calculateRate} disabled={rateLoading || !(pickupAddress.address && destinationAddress.address)} className="w-full text-white p-4 rounded-lg mt-20 disabled:cursor-not-allowed bg-primary disabled:bg-gray-300">
                    { rateLoading ? 'Calculating rate...' : 'Continue' }
                </button>
            </div>

            <BottomSheet onDismiss={() => setSheetOpen(false)} open={sheetOpen}>
                <div className="px-4">
                    <button onClick={() => setSheetOpen(false)} className="bg-primary rounded-full p-1 text-white w-8 h-8 absolute top-2 right-2 text-center">x</button>
                    <h2 className="font-bold text-center text-lg my-3">Available Package</h2>

                    <div className="p-3 border border-primary rounded-lg flex items-center">
                        <img src={Box} width={100} alt="parcel-box"/>
                        <p className="flex-1 text-center font-extrabold text-3xl">₦ {rate}</p>
                    </div>

                    <button onClick={submitDelivery} disabled={createDeliveryLoading} className="bg-primary rounded-lg p-4 w-full text-white my-4"> {createDeliveryLoading ? 'Processing...' : 'Proceed to Payment' }</button>

                </div>

            </BottomSheet>
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
