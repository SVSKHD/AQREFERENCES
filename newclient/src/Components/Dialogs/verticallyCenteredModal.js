import Modal from "react-bootstrap/Modal";
import {} from "react-icons/fa";

function AqVerticalCenterModal(props) {
  return (
    <Modal
      show={props.show}
      onHide={props.hide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <h4>{props.title}</h4>
        {props.children}
      </Modal.Body>
    </Modal>
  );
}

export default AqVerticalCenterModal;
