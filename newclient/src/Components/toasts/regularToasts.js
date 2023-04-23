import { toast } from "react-toastify";
const SuccesfullToast = (message) => {
  toast.success(message, {
    className: "toast-class",
    bodyClassName: "toast-body-class",
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
};

const ErrorToast = (message) => {
  toast.error(message, {
    className: "toast-class",
    bodyClassName: "toast-body-class",
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
};

const WarningToast = (message) => {
  toast.warning(message, {
    className: "toast-class",
    bodyClassName: "toast-body-class",
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
};

const InfoToast = (message) => {
  toast.info(message, {
    className: "toast-class",
    bodyClassName: "toast-body-class",
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
};

const RegularToastExports = () => {
  return {
    SuccesfullToast,
    ErrorToast,
    WarningToast,
    InfoToast,
  };
};

export default RegularToastExports;
