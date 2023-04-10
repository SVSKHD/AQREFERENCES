import { toast } from "react-toastify"
const AqCustomToast = (message) => {
    return (
        toast(message, {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        })
    )
}

export default AqCustomToast
