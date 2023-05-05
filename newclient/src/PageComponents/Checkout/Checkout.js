import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {
  getUserCart,
  emptyUserCart,
  saveUserAddress,
  applyCoupon,
  createCashOrderForUser,
} from "../../services/user";
import { FaTrash } from "react-icons/fa";
import RegularToastExports from "../../Components/toasts/regularToasts";
import AquaLayout from "../../Layout/Layout";

const CheckoutPageComponent = ({ history }) => {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [address, setAddress] = useState("");
  const [addressSaved, setAddressSaved] = useState(false);
  const [coupon, setCoupon] = useState("");
  // discount price
  const [totalAfterDiscount, setTotalAfterDiscount] = useState(0);
  const [discountError, setDiscountError] = useState("");

  const dispatch = useDispatch();
  const { SuccesfullToast } = RegularToastExports();
  const { cart, user, COD } = useSelector((state) => ({ ...state }));
  const Navigate = useNavigate();

  useEffect(() => {
    getUserCart(user.token).then((res) => {
      console.log("user cart res", JSON.stringify(res.data, null, 4));
      setProducts(res.data.products);
      setTotal(res.data.cartTotal);
    });
  }, []);

  const emptyCart = () => {
    // remove from local storage
    if (typeof window !== "undefined") {
      localStorage.removeItem("cart");
    }
    // remove from redux
    dispatch({
      type: "ADD_TO_CART",
      payload: [],
    });
    // remove from backend
    emptyUserCart(user.token).then((res) => {
      setProducts([]);
      setTotal(0);
      setTotalAfterDiscount(0);
      setCoupon("");
      SuccesfullToast("Cart is emapty. Contniue shopping.");
    });
  };

  const saveAddressToDb = () => {
    // console.log(address);
    saveUserAddress(user.token, address).then((res) => {
      if (res.data.ok) {
        setAddressSaved(true);
        SuccesfullToast("Address saved");
      }
    });
  };

  const showProductSummary = () => (
    <div className="card shadow-lg">
      <ol class="list-group list-group-flush">
        {products.map((p, i) => (
          <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
              <div class="fw-bold">{p.product.title}</div>({p.color}) x{" "}
              {p.count}
            </div>
            <h3>
              <span class="badge bg-success">
                ₹ {p.product.price * p.count}
              </span>
            </h3>
          </li>
        ))}
      </ol>
    </div>
  );

  return (
    <>
      <AquaLayout>
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-8 col-lg-8 col-xs-12 col-sm-12">
              <div className="card shadow-lg">
                <div className="card-body">
                  <h5 className="card-title display-6">
                    {user ? `${user.name} Details` : "User Details"}
                  </h5>
                  <div className="row">
                    <div className="col">
                      <div class="mb-3">
                        <label
                          for="exampleFormControlTextarea1"
                          class="form-label"
                        >
                          Enter Your Address
                        </label>
                        <textarea
                          class="form-control"
                          id="exampleFormControlTextarea1"
                          rows="3"
                        ></textarea>
                      </div>
                    </div>
                    <div className="col"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 col-xs-12 col-sm-12">
              <div className="card shadow-lg">
                <div className="card-body">
                  <h5 className="card-title display-6">Order Details</h5>
                  <div className="input-group mb-4">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Coupon Code"
                      aria-label="Recipient's username with two button addons"
                    />
                    <button className="btn btn-outline-dark" type="button">
                      Submit Coupon
                    </button>
                  </div>
                  <div className="d-grid gap-2 mb-2">
                    <div>{showProductSummary()}</div>
                    <OverlayTrigger
                      placement="bottom"
                      overlay={<Tooltip>clear cart</Tooltip>}
                    >
                      <button onClick={emptyCart} className="btn btn-danger">
                        <FaTrash size={25} />
                      </button>
                    </OverlayTrigger>
                  </div>
                  <h6 className="card-subtitle mb-2 text-body-secondary">
                    Card subtitle
                  </h6>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="card-link">
                    Card link
                  </a>
                  <a href="#" className="card-link">
                    Another link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AquaLayout>
    </>
  );
};
export default CheckoutPageComponent;

{
  /* <InputGroup classNameName="mb-3">
                      <Form.Control
                        aria-label="Dollar amount (with dot and two decimal places)"
                        placeholder="Enter Coupon"
                      />
                      <Button variant="light">Submit</Button>
                    </InputGroup> */
}
