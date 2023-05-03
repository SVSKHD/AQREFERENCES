import { FaRegCheckCircle, FaRegTimesCircle } from "react-icons/fa";
import { ButtonGroup, Button, InputGroup, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import AqCustomToast from "../toasts/toasts";

const CartPageComponent = (props) => {
  const dispatch = useDispatch();

  const handleQuantityChange = (e) => {
    // console.log("available quantity", p.quantity);
    let count = e.target.value < 1 ? 1 : e.target.value;

    if (count > props.quantity) {
      AqCustomToast(`Max available quantity: ${props.quantity}`);
      return;
    }

    let cart = [];

    if (typeof window !== "undefined") {
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }

      cart.map((product, i) => {
        if (product._id == props._id) {
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
        if (product._id === props._id) {
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
  return (
    <>
      <div class="card mb-3 shadow-lg">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src={props.image}
              class="img-fluid rounded-start"
              alt={props.title}
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{props.title}</h5>
              <p class="card-text">{props.description}</p>
              <InputGroup>
                <Form.Control
                  placeholder="Quantity"
                  aria-label="Recipient's username with two button addons"
                  value={props.count}
                  onChange={handleQuantityChange}
                />
                <Button variant="outline-dark">Button</Button>
                <Button variant="outline-dark">Button</Button>
              </InputGroup>
              <div className="pt-2">
              {props.shipping === "Yes" ? (
                <h5>Shipping : <FaRegTimesCircle size={25} className="text-danger" /></h5>
              ) : (
               <h5>Shipping : <FaRegCheckCircle size={25} className="text-success" /></h5> 
              )}
              </div>
              {/* <ButtonGroup aria-label="Basic example">
                <Button variant="link">
                  <FaMinus size={20} />
                </Button>
                <Button variant="link" className="aq-text-decorate">
                  {props.count}
                </Button>
                <Button variant="link">
                  <FaPlus size={20} />
                </Button>
              </ButtonGroup> */}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="card mb-3 shadow-lg">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={props.image} className="rounded-start" height="200" alt={props.title}/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title aq-cart-page-title">

                                {props.title}

                            </h5>
                            <p className="card-text">{props.description}</p>
                            
                        </div>
                    </div>
                </div>
            </div> */}
    </>
  );
};
export default CartPageComponent;
