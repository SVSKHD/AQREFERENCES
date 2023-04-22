import { Offcanvas } from "react-bootstrap";
import {useSelector , useDispatch} from "react-redux"
const AqDrawer = (props) => {
  const dispatch = useDispatch()
  const {drawer} = useSelector((state) => ({ ...state }));
  const { show, hide, placement, title } = props;
  return (
    <>
      <Offcanvas show={drawer} onHide={() => {
        dispatch({
          type: "SET_VISIBLE",
          payload: false,
        });
      }} placement={placement}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{title}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>{props.children}</Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
export default AqDrawer;
