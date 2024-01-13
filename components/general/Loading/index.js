import { ImSpinner2 } from "react-icons/im";

export default function Loading({ spinnerSize = "50px" }) {
    return (
        <div className="flex-1 flex justify-center items-center">
            <ImSpinner2 style={{ fontSize: spinnerSize }} className="animate-spin" />
        </div>
    );
}
