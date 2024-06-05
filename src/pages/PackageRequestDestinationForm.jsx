import PackageRequestTop from "../components/PackageRequestTop.jsx";
import RequestFormInput from "../components/RequestFormInput.jsx";

const PackageRequestDestinationForm = () => {
    return (
        <div className="py-2">
            <PackageRequestTop title="Destination Address" link="/send-package"/>

            <form className="px-3 mt-7">
                <RequestFormInput placeholder="Enter full name" label="Receiver's Name" name="receiverName"/>
                <RequestFormInput placeholder="Enter phone number" label="Receiver's Phone Number" name="receiverPhone"
                                  inputType="tel"/>
                <RequestFormInput placeholder="Email Address" label="Receiver's Name" name="receiverEmail"
                                  inputType="email"/>
                <RequestFormInput placeholder="Destinaton Address" label="Pickup Address" name="receiverAddress"/>

                <button className="w-full bg-primary text-white p-4 rounded-lg mt-20">
                    <a href="/send-package">Continue </a>
                </button>
            </form>
        </div>
    )
}


export default PackageRequestDestinationForm