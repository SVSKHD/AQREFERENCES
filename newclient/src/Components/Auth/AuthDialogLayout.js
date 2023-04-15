import AqVerticalCenterModal from "../Dialogs/verticallyCenteredModal";
import AQ from "../../Assests/Default.png"

const AuthDialogLayout = (props) => {
  return (
    <>
      <AqVerticalCenterModal className="aq-text-decorate" show={props.show} hide={props.hide}>
        <div className="card">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={AQ} className="aq-image rounded-start" alt="..." />
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
