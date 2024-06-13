import { useState } from "react";

import { QrReader } from 'react-qr-reader';
import {Link} from "react-router-dom";
import ArrowLeft from "../assets/icons/arrow-left.svg";

const qrReaderConstraints = {
    facingMode: 'environment',
}

const ConfirmDelivery = () => {
    const [data, setData] = useState('');

    return (
        <div className="p-3 font-josefinSans">
            <div className="flex items-center mb-8">
                <Link to="/my-deliveries">
                    <img src={ArrowLeft} alt="go back"/>
                </Link>
                <h1 className="font-bold text-lg">Confirm Delivery</h1>
            </div>
            <p className="text-lg">
                Please point your camera at the QR code shown by the receiver.
            </p>
            <QrReader
                constraints={qrReaderConstraints}
                onResult={(result, error) => {
                    if (!!result) {
                        console.log(result?.text);
                        setData("Delivery Confirmed");
                    }

                    if (!!error) {
                        console.info(error);
                    }
                }}
                style={{width: '100%'}}
            />
            <p>{data}</p>
        </div>
    );
}

export default ConfirmDelivery