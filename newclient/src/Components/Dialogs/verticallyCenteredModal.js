import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function AqVerticalCenterModal(props) {
  return (
    <Modal
      show={props.show}
      onHide={props.hide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{props.description}</h4>
        {props.children}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AqVerticalCenterModal;
