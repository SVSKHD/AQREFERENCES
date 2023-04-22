import AqVerticalCenterModal from "../Dialogs/verticallyCenteredModal";
import AQ from "../../Assests/Default.png";
import { useSelector, useDispatch } from "react-redux";

const AuthDialogLayout = (props) => {
  const { authDrawerAndDialog } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
  return (
    <>
      <AqVerticalCenterModal
        className="aq-text-decorate"
        show={authDrawerAndDialog}
        hide={() => {
          dispatch({
            type: "SET_AUTH_DRAWER_VISIBLE",
            payload: false,
          });
        }}
      >
        <div className="card">
          <div className="row g-0">
            <div className="col-md-4">
              <div className="text-center">
                <img src={AQ} className="aq-image rounded-start" alt="..." />
              </div>
            </div>
            <div className="col-md-8">
              <div className="card-body">{props.children}</div>
            </div>
          </div>
        </div>
      </AqVerticalCenterModal>
    </>
  );
};
export default AuthDialogLayout;
