import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {useGetDeliveriesMutation} from "../app/api.js";

const MyDeliveries = () => {
    const [fetchDeliveries, { isLoading }] = useGetDeliveriesMutation();
    const [deliveries, setDeliveries] = useState([]);
    const getDeliveries = async ()  => {
        try {
            const res = await fetchDeliveries().unwrap();
            setDeliveries(res.deliveries);
        } catch {
            console.log("Could not fetch deliveries.");
        }
    }
    useEffect( () => {
        getDeliveries()
    }, []);
    return (
        <div className="p-3 mb-12">
            {deliveries.map(delivery => {
                return <DeliveryCard key={delivery.id} deliveryDetails={delivery} />
            })}
        </div>
    )
}

const DeliveryCard = ({ deliveryDetails }) => {
    const { created_at, price, delivery_number, status, id, addresses } = deliveryDetails;
    const destinationAddress = addresses.find((address) => address.type === "destination");
    return (
        <Link to={`/my-deliveries/${id}`} className="font-josefinSans bg-[#202124] mb-3 rounded-md text-white p-2 text-sm flex flex-col gap-3">
            <div className="flex justify-between">
                <span>{new Date(created_at).toDateString()}, {new Date(created_at).toLocaleTimeString()}</span>
                <span>N { price }</span>
            </div>
            <div className="flex justify-between items-center">
                <span>{delivery_number}</span>
                <span className={`px-3 py-1 rounded-3xl text-xs ${statusColorBg(status)}`}>{ getMappedOrderStatus(status) }</span>
            </div>
            <div>
                {destinationAddress.address}
            </div>
        </Link>
    )
}

const statusColorBg = (status) => {
    const maps = {
        delivered: 'text-black bg-successGreen',
        cancelled: 'bg-[#cf332d] text-[#FFE5CE]'
    }
    if(maps[status]) return maps[status];
    else return "bg-[#dccb26] text-[#2b2926]"
}

const getMappedOrderStatus = (status) => {
    const maps = {
        awaiting_rider: 'Ongoing',
        enroute_pickup: 'Ongoing',
        enroute_destination: 'Ongoing',
        delivered: 'Delivered',
        cancelled: 'Cancelled'
    }
    return maps[status];
}
export default MyDeliveries;
