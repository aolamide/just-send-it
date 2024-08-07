import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {useConfirmPaymentMutation} from "../app/api.js";
import handleErrors from "../utils/handleErrors.js";
import toast from "react-hot-toast";

const PaymentCallback = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [confirmPayment, { isLoading } ] = useConfirmPaymentMutation();
    const query = new URLSearchParams(location.search);
    const paymentRef = query.get('reference');

    const validatePayment = async () => {
        try {
            if(!paymentRef) {
                navigate('/home')
            }
            const data = await confirmPayment(paymentRef).unwrap();
            toast.success(`Payment successful`);
            navigate(`/my-deliveries/${data.id}`);
        } catch(err) {
            handleErrors(err);
            navigate('/home');
            console.log(err);
        }
    }

    useEffect(() => {
        validatePayment();
    }, []);

    if(isLoading) return <p>Please wait while payment is being confirmed...</p>;

    return <div>Processing payment...</div>;
};

export default PaymentCallback;
