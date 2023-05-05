import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { OverlayTrigger, Tooltip } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import {
  getUserCart,
  emptyUserCart,
  saveUserAddress,
  applyCoupon,
  createCashOrderForUser,
} from "../../services/user";
import { FaTrash } from "react-icons/fa"
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

  const dispatch = useDispatch()
  const { SuccesfullToast } = RegularToastExports()
  const { cart, user, COD } = useSelector((state) => ({ ...state }));
  const Navigate = useNavigate()
  useEffect(() => {
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
        toast.success("Address saved");
      }
    });
  };

  return (
    <>
      <AquaLayout>
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-8 col-lg-8 col-xs-12 col-sm-12">
              <div className="card shadow-lg">
                <div className="card-body">
                  <h5 className="card-title display-6">{user ? `${user.name} Details` : "User Details"}</h5>
                  <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="card-link">Card link</a>
                  <a href="#" className="card-link">Another link</a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 col-xs-12 col-sm-12">
              <div className="card shadow-lg">
                <div className="card-body">
                  <h5 className="card-title display-6">Order Details</h5>
                  <div className="input-group mb-4">
                    <input type="text" className="form-control" placeholder="Coupon Code" aria-label="Recipient's username with two button addons" />
                    <button className="btn btn-outline-dark" type="button">Submit Coupon</button>
                  </div>
                  <div className="d-grid gap-2 mb-2" >
                    <OverlayTrigger
                      placement="bottom"
                      overlay={
                        <Tooltip>
                          clear cart
                        </Tooltip>
                      }
                    >
                      <button onClick={emptyCart} className="btn btn-danger">
                        <FaTrash size={25} />
                      </button>
                    </OverlayTrigger>

                  </div>
                  <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="card-link">Card link</a>
                  <a href="#" className="card-link">Another link</a>
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


{/* <InputGroup classNameName="mb-3">
                      <Form.Control
                        aria-label="Dollar amount (with dot and two decimal places)"
                        placeholder="Enter Coupon"
                      />
                      <Button variant="light">Submit</Button>
                    </InputGroup> */}