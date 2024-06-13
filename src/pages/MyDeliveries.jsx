import {Link} from "react-router-dom";


const mockDeliveries = [
    {
        id: 'XMFW-3774',
        date: '01-06-2024',
        time: '10:27',
        pickupAddress: '7 Okeke Street, Yaba, Lagos.',
        destinationAddress: 'Faculty of Engineering, Unilag.',
        status: 'In Progress',
        amount: '2,000'
    },
    {
        id: 'XMFE-1233',
        date: '28-05-2024',
        time: '15:34',
        pickupAddress: '127 Adeola Odeku, VI, Lagos.',
        destinationAddress: '30 Abebe Street, Epe, Lagos.',
        status: 'Successful',
        amount: '1,500'
    },
]
const MyDeliveries = () => {
    return (
        <div className="p-3">
            {mockDeliveries.map(delivery => {
                return <DeliveryCard key={delivery.id} deliveryDetails={delivery} />
            })}
        </div>
    )
}

const DeliveryCard = ({ deliveryDetails }) => {
    const { date, time, amount, id, destinationAddress, status } = deliveryDetails;
    return (
        <Link to={`/my-deliveries/${id}`} className="font-josefinSans bg-[#202124] mb-3 rounded-md text-white p-2 text-sm flex flex-col gap-3">
            <div className="flex justify-between">
                <span>{date}, { time }</span>
                <span>N { amount }</span>
            </div>
            <div className="flex justify-between items-center">
                <span>{id}</span>
                <span className={`bg-red-600 px-3 py-1 rounded-3xl text-xs ${status === 'Successful' ? 'text-black bg-successGreen' : 'text-[#DA9451] bg-[#FFE5CE]'}`}>{ status }</span>
            </div>
            <div>
                {destinationAddress}
            </div>
        </Link>
    )
}
export default MyDeliveries;