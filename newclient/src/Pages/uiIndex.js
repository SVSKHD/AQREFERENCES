import AqCustomToast from "../Components/toasts/toasts";

const UiIndex = () => {
  const toastEnable = () => {
    AqCustomToast("hello Toast Test");
  };
  return (
    <>
      <div className="container">
        <h1>UI Elements</h1>
        <hr />
        <button onClick={toastEnable} className="btn btn-dark">
          Toast Test
        </button>
      </div>
    </>
  );
};
export default UiIndex;
