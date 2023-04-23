import { toast } from "react-toastify"



const AqCustomToast = (props) => {
    const {message} = props
    return (
        toast(message, {
            className:"toast-class",
            bodyClassName:"toast-body-class",
            position: "bottom-center",
            autoClose: 100000,
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
