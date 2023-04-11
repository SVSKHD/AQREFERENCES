import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  InputGroup,
} from "react-bootstrap";
import { FaCartArrowDown, FaUser } from "react-icons/fa";
import AqVerticalCenterModal from "../Components/Dialogs/verticallyCenteredModal";
import AqDrawer from "../Components/Drawers/Drawer";
import AqCartCard from "../Components/cards/cartCard";

function AquaNavHead() {
  const { user, cart } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
  const [userModal, setUserModal] = useState(false);
  const [cartDrawer, setCartDrawer] = useState(false);

  return (
    <Navbar className="bg-white text-white" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">Aquakart</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/shop">Shop</Nav.Link>
            <Nav.Link href="/about">About-us</Nav.Link>
          </Nav>
          <button
            onClick={() => setCartDrawer(true)}
            type="button"
            className="btn btn-link position-relative text-dark"
          >
            <FaCartArrowDown size={25} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {cart.length}
              <span className="visually-hidden">unread messages</span>
            </span>
          </button>

          <Button
            variant="link"
            className="text-dark"
            onClick={() => setUserModal(true)}
          >
            <FaUser size={25} />
          </Button>
          <AqVerticalCenterModal
            show={userModal}
            hide={() => setUserModal(false)}
          />
          <AqDrawer
            show={cartDrawer}
            hide={() => setCartDrawer(false)}
            placement={"end"}
            title="Cart Briefing"
          >
            {cart.length ? (
              <>
                <h4>cart items</h4>
                <hr />
                {user?(
                  <>
                  
                  </>
                ):(
                  <>
                  <div className="text-center p-4">
                 <Button variant="link" onClick={()=>setUserModal(true)}>Please login here</Button>
                  </div>
                  </>
                )}
                {cart.map((r, i) => (
                  <>
                    <AqCartCard
                      title={r.title}
                      price={r.price}
                      images={r.images}
                    />
                  </>
                ))}
              </>
            ) : (
              <>
                <h4>No items in cart yet</h4>
              </>
            )}
            <Button href="/cart">Go To Cart</Button>
          </AqDrawer>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AquaNavHead;
