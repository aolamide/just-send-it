import PackageRequestTop from "../components/PackageRequestTop.jsx";
import RequestFormInput from "../components/RequestFormInput.jsx";
import RequestFormSelect from "../components/RequestFormSelect.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {setPickupAddress} from "../app/addressSlice.js";
import {useNavigate} from "react-router-dom";

const PackageRequestPickupForm = () => {
    const areas = useSelector(state => state.address.areas);
    const pickupAddress = useSelector(state => state.address.pickupAddress);
    const [name, setName] = useState(pickupAddress.full_name);
    const [email, setEmail] = useState(pickupAddress.email);
    const [phone, setPhone] = useState(pickupAddress.phone_number);
    const [address, setAddress] = useState(pickupAddress.address);
    const [area, setArea] = useState(pickupAddress.area);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submitAddress = (e) => {
        e.preventDefault();
        dispatch(setPickupAddress({
            phone_number: phone,
            email,
            address,
            area,
            full_name: name
        }))
        navigate("/send-package");
    }

    const canContinue = name && email && phone && address && area;


    return (
        <div className="py-2">
            <PackageRequestTop title="Pickup Address" link="/send-package" />

            <form onSubmit={submitAddress} className="px-3 mt-7">
                <RequestFormInput value={name} setValue={setName} placeholder="Enter full name" label="Sender's Name" name="senderName" />
                <RequestFormInput value={phone} setValue={setPhone} placeholder="Enter phone number" label="Sender's Phone Number" name="senderPhone" inputType="tel" />
                <RequestFormInput value={email} setValue={setEmail} placeholder="Email Address" label="Sender's Email" name="senderEmail" inputType="email" />
                <RequestFormInput value={address} setValue={setAddress} placeholder="Pickup Address" label="Pickup Address" name="senderAddress" />
                <RequestFormSelect value={area} setValue={setArea} label="Local Govt Area" name="senderLGA" options={areas} />

                <button disabled={!canContinue} className="w-full bg-primary text-white p-4 rounded-lg mt-20 disabled:bg-gray-700">
                    Continue
                </button>
            </form>
        </div>
    )
}


export default PackageRequestPickupForm
