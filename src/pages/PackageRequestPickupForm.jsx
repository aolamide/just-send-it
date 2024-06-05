import PackageRequestTop from "../components/PackageRequestTop.jsx";
import RequestFormInput from "../components/RequestFormInput.jsx";

const PackageRequestPickupForm = () => {
    return (
        <div className="py-2">
            <PackageRequestTop title="Pickup Address" link="/send-package" />

            <form className="px-3 mt-7">
                <RequestFormInput placeholder="Enter full name" label="Sender's Name" name="senderName" />
                <RequestFormInput placeholder="Enter phone number" label="Sender's Phone Number" name="senderPhone" inputType="tel" />
                <RequestFormInput placeholder="Email Address" label="Sender's Name" name="senderEmail" inputType="email" />
                <RequestFormInput placeholder="Pickup Address" label="Pickup Address" name="senderAddress" />

                <button className="w-full bg-primary text-white p-4 rounded-lg mt-20">
                    <a href="/send-package">Continue </a>
                </button>
            </form>
        </div>
    )
}


export default PackageRequestPickupForm