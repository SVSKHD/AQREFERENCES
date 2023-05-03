import AquaLayout from "../../Layout/Layout";
import { useSelector, useDispatch } from "react-redux";
import { FaWhatsapp, FaEnvelope, FaSearch } from "react-icons/fa";
import { Button, InputGroup, Form } from "react-bootstrap";
import CartPageComponent from "../../Components/cards/cartPageCardInCheckout";
import AQ from "../../Assests/Default.png";
const CartComponent = () => {
  const { cart, user } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();

  const getTotal = () => {
    return cart.reduce((currentValue, nextValue) => {
      return currentValue + nextValue.count * nextValue.price;
    }, 0);
  };

  const handleAuthDialog = () => {
    dispatch({
      type: "SET_AUTH_DRAWER_VISIBLE",
      payload: true,
    });
  };

  
  const showCartItems = (cart) => (
    <>
      {cart.map((r, i) => (
        <div key={i}>
          <CartPageComponent
            title={r.title}
            image={r.images ? r.images[0].url : AQ}
            description={r.description}
            count={r.count}
          />
        </div>
      ))}
    </>
  );
  const showUserButtons = (user) =>
    user ? (
      <>
        <div className="mb-2">
          <div className="d-grid gap-2 container-fluid mb-2">
            <Button variant="primary" size="sm">
              Proceeed to Checkout
            </Button>
          </div>
          <div className="d-grid gap-2 container-fluid">
            <Button variant="primary" size="sm" disabled={!cart.length}>
              Pay Cash On Delivery
            </Button>
          </div>
        </div>
      </>
    ) : (
      <>
        <div className="d-grid gap-2 container-fluid mb-2">
          <Button onClick={handleAuthDialog} size="sm">
            Login
          </Button>
        </div>
      </>
    );
  return (
    <>
      <AquaLayout>
        <div className="container mb-2">
          <div className="row">
            <div className="col-md-8 col-lg-8 col-sm-12 col-xs-12">
              <div class="card">
                <div class="card-body shadow-lg">
                  <h5 class="card-title display-5 mb-5">Cart Items</h5>
                  {!cart.length ? (
                    <p>
                      No Products In Cart Yet{" "}
                      <a href="/shop">Continue Shopping</a>
                    </p>
                  ) : (
                    showCartItems(cart)
                  )}
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12">
              <div class="card shadow-lg mb-2">
                <div class="card-body">
                  <h5 class="card-title display-5">Card title</h5>
                  <div className="mb-2">
                    <InputGroup className="mb-3">
                      <Form.Control
                        aria-label="Dollar amount (with dot and two decimal places)"
                        placeholder="Enter Coupon"
                      />
                      <Button variant="light">Submit</Button>
                    </InputGroup>
                  </div>
                  <ol class="list-group">
                    <li class="list-group-item d-flex justify-content-between align-items-start">
                      <div class="ms-2 me-auto">
                        <h5 class="fw-bold">Total</h5>
                      </div>
                      <div class="ms-2">
                        <h5 class="fw-bold text-success">₹{getTotal()}/-</h5>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
              <div>
                {showUserButtons(user)}

                <div className="card shadow-lg">
                  <div className="card-body">
                    <div className="text-h6">Contact Here </div>
                    <Button variant="link" className="text-success">
                      <FaWhatsapp size={26} />
                    </Button>
                    <Button variant="link" className="text-dark">
                      <FaEnvelope size={25} />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AquaLayout>
    </>
  );
};
export default CartComponent;
