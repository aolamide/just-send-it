import {useEffect, useState} from "react";
import { Scanner } from '@yudiel/react-qr-scanner';
import {Link, useNavigate, useParams} from "react-router-dom";
import ArrowLeft from "../assets/icons/arrow-left.svg";
import toast from "react-hot-toast";
import handleErrors from "../utils/handleErrors.js";
import {useDeliverPackageMutation} from "../app/api.js";

const ConfirmDelivery = () => {
    const [token, setToken] = useState('');
    const [deliver, { isLoading }] = useDeliverPackageMutation();
    const { deliveryId } = useParams();
    const navigate = useNavigate();

    const deliverParcel = async () => {
        try {
            await deliver({ deliveryId, token }).unwrap();
            toast.success('Delivery confirmed.');
            navigate(`/my-deliveries/${deliveryId}`);
        } catch(err) {
            handleErrors(err);
        }
    }

    useEffect(() => {
        if(token && !isLoading) {
            deliverParcel();
        }
    }, [token]);

    return (
        <div className="p-3 font-josefinSans">
            <div className="flex items-center mb-8">
                <Link to={`/my-deliveries/${deliveryId}`}>
                    <img src={ArrowLeft} alt="go back"/>
                </Link>
                <h1 className="font-bold text-lg">Confirm Delivery</h1>
            </div>
            <p className="text-lg">
                Please point your camera at the QR code shown by the receiver.
            </p>
            <Scanner onScan={(result) => setToken(result[0].rawValue)} />
            {isLoading && <div className="flex items-center justify-center">
                <div className="w-6 h-6 border-t-2 border-b-2 border-blue-500 rounded-full animate-spin"></div>
            </div>}
        </div>
    );
}

export default ConfirmDelivery
