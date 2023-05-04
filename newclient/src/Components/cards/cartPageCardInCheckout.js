import React from "react";
import { useDispatch, useSelector } from "react-redux";
import RegularToastExports from "../toasts/regularToasts";
import { FaTrash, FaHeart } from "react-icons/fa";
import { addToWishlist } from "../../services/user";

const CartPageComponent = ({ p }) => {
  let dispatch = useDispatch();
  const { ErrorToast, SuccesfullToast } = RegularToastExports();
  const { user, cart } = useSelector((state) => ({ ...state }));
  const handleColorChange = (e) => {
    console.log("color changed", e.target.value);

    let cart = [];
    if (typeof window !== "undefined") {
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }

      cart.map((product, i) => {
        if (product._id === p._id) {
          cart[i].color = e.target.value;
        }
      });

      //  console.log('cart udpate color', cart)
      localStorage.setItem("cart", JSON.stringify(cart));
      dispatch({
        type: "ADD_TO_CART",
        payload: cart,
      });
    }
  };

  const handleQuantityChange = (e) => {
    // console.log("available quantity", p.quantity);
    let count = e.target.value < 1 ? 1 : e.target.value;

    if (count > p.quantity) {
      ErrorToast(`Max available quantity: ${p.quantity}`);
      return;
    }

    let cart = [];

    if (typeof window !== "undefined") {
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }

      cart.map((product, i) => {
        if (product._id == p._id) {
          cart[i].count = count;
        }
      });

      localStorage.setItem("cart", JSON.stringify(cart));
      dispatch({
        type: "ADD_TO_CART",
        payload: cart,
      });
    }
  };

  const handleRemove = () => {
    // console.log(p._id, "to remove");
    let cart = [];

    if (typeof window !== "undefined") {
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }
      // [1,2,3,4,5]
      cart.map((product, i) => {
        if (product._id === p._id) {
          cart.splice(i, 1);
        }
      });

      localStorage.setItem("cart", JSON.stringify(cart));
      dispatch({
        type: "ADD_TO_CART",
        payload: cart,
      });
    }
  };

  const handleAddToWishlist = (e) => {
    e.preventDefault();
    addToWishlist(p._id, user.token).then((res) => {
      console.log("ADDED TO WISHLIST", res.data);
      SuccesfullToast("Added to wishlist");
    });
  };

  return (
    <div>
      <div className="card mb-3 shadow-lg">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={p.images[0].url}
              className="img-fluid rounded-start"
              alt={p.title}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{p.title}</h5>

              <p className="card-text">
                <small className="text-muted">{p.description}</small>
              </p>
              <div className="input-group mb-3">
                <button
                  className="btn btn-outline-danger"
                  type="button"
                  onClick={handleRemove}
                  id="button-addon1"
                >
                  <FaTrash size={25} />
                </button>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Quantity"
                  value={p.count}
                  onChange={handleQuantityChange}
                  aria-label="Example text with button addon"
                  aria-describedby="button-addon1"
                />
                <button
                  className="btn btn-outline-danger"
                  type="button"
                  onClick={handleAddToWishlist}
                  id="button-addon1"
                >
                  <FaHeart size={25} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPageComponent;
