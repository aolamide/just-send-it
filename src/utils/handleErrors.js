import { toast } from "react-hot-toast";

export default function handleErrors(error) {
    if (error.message) {
        toast.error(error.message);
    } else if (error.data.message) {
        toast.error(error.data.message);
    } else {
        toast.error("An error occurred");
    }
}
