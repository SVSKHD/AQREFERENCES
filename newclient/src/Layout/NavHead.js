import { useState, useEffect } from "react";
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
import AqDrawer from "../Components/Drawers/Drawer";
import AqCartCard from "../Components/cards/cartCard";
import AuthDialogLayout from "../Components/Auth/AuthDialogLayout";
import LoginAuth from "../Components/Auth/LoginDialog";
import SignupAuth from "../Components/Auth/SignupDialog";
import useAuthStore from "../zustStore/Auth";
import useUserStore from "../zustStore/user";
import AqNameIconButton from "../Components/Resuables/AqNameIconButton";
import DrawerWelcomeCard from "../Components/cards/drawerWelcomeCard";
import { auth } from "../config/firebase";
import RegularToastExports from "../Components/toasts/regularToasts";

function AquaNavHead() {
  //store
  const { user, cart } = useSelector((state) => ({ ...state }));

  const dispatch = useDispatch();
  //zustand store
  const userSignup = useAuthStore((state) => state.userSignupStatus);
  const toggleSignup = useAuthStore((state) => state.toggleSignup);
  const [userModal, setUserModal] = useState(false);
  const [cartDrawer, setCartDrawer] = useState(false);
  const [signupTitle, setToggleSignupTitle] = useState(
    "No Account Yet..? Please Signup"
  );
  const [userChange, setUserChange] = useState({});

  //zustand
  const userStore = useUserStore((state) => state.userData);
  //zustand observations
  useEffect(() => {
    userStore ? setUserChange(userStore) : setUserChange({});
  }, [userStore]);

  const ToggleSignupStatus = () => {
    setToggleSignupTitle("Already A User..? Please Login");
    toggleSignup();
  };
  //toasts
  const { SuccesfullToast } = RegularToastExports();

  const logout = () => {
    auth.signOut();
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    SuccesfullToast("Successfully Signed You Out");
  };

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
            <Nav.Link href="/compare">Compare</Nav.Link>
            <Nav.Link href="/about">About-us</Nav.Link>
          </Nav>
          <div className="me-3">
            <button
              onClick={() => {
                dispatch({
                  type: "SET_VISIBLE",
                  payload: true,
                });
              }}
              type="button"
              className="btn btn-link position-relative text-dark"
            >
              <FaCartArrowDown size={25} />
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.length}
                <span class="visually-hidden">unread messages</span>
              </span>
            </button>
          </div>
          {user ? (
            <>
              <AqNameIconButton name={user.name} signout={logout} />
            </>
          ) : (
            <>
              <Button
                variant="link"
                className="text-dark"
                onClick={() => {
                  dispatch({
                    type: "SET_AUTH_DRAWER_VISIBLE",
                    payload: true,
                  });
                }}
              >
                <FaUser size={25} />
              </Button>
            </>
          )}

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
                {user ? (
                  <>
                    <DrawerWelcomeCard
                      name={user.name}
                      email={user.email}
                      signOut={logout}
                    />
                  </>
                ) : (
                  <>
                    <div className="text-center p-4">
                      <Button
                        variant="link"
                        onClick={() => {
                          dispatch({
                            type: "SET_AUTH_DRAWER_VISIBLE",
                            payload: true,
                          });
                        }}
                      >
                        Please login here
                      </Button>
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
