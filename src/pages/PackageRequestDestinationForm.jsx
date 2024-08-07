import PackageRequestTop from "../components/PackageRequestTop.jsx";
import RequestFormInput from "../components/RequestFormInput.jsx";
import RequestFormSelect from "../components/RequestFormSelect.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {setDestinationAddress} from "../app/addressSlice.js";
import {useNavigate} from "react-router-dom";

const PackageRequestDestinationForm = () => {
    const areas = useSelector(state => state.address.areas);
    const destinationAddress = useSelector(state => state.address.destinationAddress);
    const [name, setName] = useState(destinationAddress.full_name);
    const [email, setEmail] = useState(destinationAddress.email);
    const [phone, setPhone] = useState(destinationAddress.phone_number);
    const [address, setAddress] = useState(destinationAddress.address);
    const [area, setArea] = useState(destinationAddress.area);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submitAddress = (e) => {
        e.preventDefault();
        dispatch(setDestinationAddress({
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
            <PackageRequestTop title="Destination Address" link="/send-package"/>

            <form onSubmit={submitAddress} className="px-3 mt-7">
                <RequestFormInput value={name} setValue={setName} placeholder="Enter full name" label="Receiver's Name" name="receiverName"/>
                <RequestFormInput value={phone} setValue={setPhone} placeholder="Enter phone number" label="Receiver's Phone Number" name="receiverPhone"
                                  inputType="tel"/>
                <RequestFormInput value={email} setValue={setEmail} placeholder="Email Address" label="Receiver's Email" name="receiverEmail"
                                  inputType="email"/>
                <RequestFormInput value={address} setValue={setAddress} placeholder="Destinaton Address" label="Pickup Address" name="receiverAddress"/>
                <RequestFormSelect  value={area} setValue={setArea} label="Local Govt Area" name="receiverLGA" options={areas} />

                <button disabled={!canContinue} className="w-full bg-primary text-white p-4 rounded-lg mt-20 disabled:bg-gray-700">
                    Continue
                </button>
            </form>
        </div>
    )
}


export default PackageRequestDestinationForm
