import ArrowLeft from "../assets/icons/arrow-left.svg";
import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useGetDeliveryDetailsMutation} from "../app/api.js";
import handleErrors from "../utils/handleErrors.js";
import {useSelector} from "react-redux";

const mockStatusUpdates = [
    {
        datetime: "1 Jun 2024, 10:27",
        details: "Order Placed"
    },
    {
        datetime: "1 Jun 2024, 10:45",
        details: "Pickup @ 127 Adeola Odeku, VI, Lagos. \n Alimi Olamide, +2348083327583"
    },
    {
        datetime: "1 Jun 2024, 11:11",
        details: "Dropoff @ 3b Cocoa Industries Road, Lagos, Nigeria \n Jola Ayeye, +2348171245571"
    },
]

const DeliveryDetails = () => {
    const { deliveryId } = useParams();
    const navigate = useNavigate();
    const userType = useSelector(state => state.user.role);
    const [getDeliveryDetails, { isLoading }] = useGetDeliveryDetailsMutation();
    const [delivery, setDelivery] = useState(null);
    const fetchDeliveryDetails = async () => {
        try {
            const res = await getDeliveryDetails(deliveryId);
            setDelivery(res.data);
            console.log(res.data);
        } catch(err) {
            console.log(err);
            handleErrors(err);
            navigate('/my-deliveries');
        }
    }
    useEffect(() => {
        fetchDeliveryDetails();
    }, []);
    if(isLoading || !delivery) return <div>...</div>
    return (
        <div className="p-3 font-josefinSans">
            <div className="flex items-center mb-8">
                <Link to="/my-deliveries">
                    <img src={ArrowLeft} alt="go back"/>
                </Link>
                <h1 className="font-bold text-lg">Delivery Details</h1>
            </div>
            <div className="my-4">
                <p className="text-zinc-600 text-sm">Delivery Number</p>
                <p className="text-lg">{delivery.orderNumber}</p>
            </div>

            <ol className="relative ms-3  border-s-2 border-dotted border-successGreen">
                {delivery.status_updates.map((statusUpdate, idx) => {
                    return <DeliveryStatusUpdate key={idx} details={statusUpdate.status} datetime={statusUpdate.timestamp} />
                })}
            </ol>

            {userType === 'rider' && <Link to="/confirm-delivery"><button className="bg-primary p-4 rounded-md shadow-md text-white">Confirm Delivery</button> </Link>}
        </div>
    )
}

const DeliveryStatusUpdate = ({ datetime, details }) => {
    return (
        <div>
            <li className="mb-10 ms-6">
                <svg
                    className="text-gray-500 dark:text-gray-400 absolute -start-3 flex h-6 w-6 items-center justify-center"
                    aria-hidden="true"
                    viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 10.8181 20.7672 9.64778 20.3149 8.55585C19.8626 7.46392 19.1997 6.47177 18.364 5.63604C17.5282 4.80031 16.5361 4.13738 15.4442 3.68508C14.3522 3.23279 13.1819 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12C3 14.3869 3.94821 16.6761 5.63604 18.364C7.32387 20.0518 9.61305 21 12 21ZM11.768 15.64L16.768 9.64L15.232 8.36L10.932 13.519L8.707 11.293L7.293 12.707L10.293 15.707L11.067 16.481L11.768 15.64Z"
                          fill="#00C795"/>
                </svg>
                <h4 className="mb-0.5 text-base font-semibold text-gray-900 dark:text-primary-500">{new Date(datetime).toDateString()}, {new Date(datetime).toLocaleTimeString()}</h4>
                <p className="text-sm font-normal text-gray-500 dark:text-gray-400 whitespace-pre-wrap">{details}</p>
            </li>
        </div>
    )
}

const CustomerView = ({ delivery }) => {
    return (
        <div>

        </div>
    )
}

export default DeliveryDetails;
