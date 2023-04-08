import { Offcanvas } from "react-bootstrap";
const AqDrawer = (props) => {
  const { show, hide, placement, title } = props;
  return (
    <>
      <Offcanvas show={show} onHide={hide} placement={placement}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{title}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>{props.children}</Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
export default AqDrawer;
