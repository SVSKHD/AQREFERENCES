import { useState } from "react";
import { Button, Carousel, Card } from "react-bootstrap";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaEye } from "react-icons/fa";
import { IoCartOutline, IoCart } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
//import AQ from "../../Assests/Default.png";
//import AquaCommonCarousel from "../carousels/commonCarousel";

const ProductCard = ({ r }) => {
  const { title, description, images, slug, price } = r;
  const [pause, setPause] = useState(false);
  const [Cart, setCart] = useState(false);
  const [fav, setFav] = useState(false);

  const { user, cart } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    setCart(!Cart);
    // create cart array
    let cart = [];
    if (typeof window !== "undefined") {
      // if cart is in local storage GET it
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }
      // push new product to cart
      cart.push({
        ...r,
        count: 1,
      });
      // remove duplicates
      let unique = _.uniqWith(cart, _.isEqual);
      // save to local storage
      // console.log('unique', unique)
      localStorage.setItem("cart", JSON.stringify(unique));
      // show tooltip

      // add to redux state
      dispatch({
        type: "ADD_TO_CART",
        payload: unique,
      });
      // show cart items in side drawer
      dispatch({
        type: "SET_VISIBLE",
        payload: true,
      });
    }
  };
  return (
    <>
    <div className="d-flex justify-content-around AQ-card">
      <Card className="shadow-lg AQ-card" style={{ width: "22rem" }}>
        <div className="p-2">
          <Carousel
            className="shadow-sm img-thumbnail"
            variant="dark"
            touch={true}
            pause={pause}
            onMouseEnter={() => setPause("hover")}
            onMouseLeave={() => setPause(false)}
          >
            {images.map((r, i) => (
              <Carousel.Item key={i}>
                <img
                  className="d-block w-100"
                  src={r.url}
                  alt="Aquakart Slides"
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <Card.Body>
          <Card.Title className="font-weight-bold">{title}</Card.Title>
          <Card.Text className="text-success">
            <h6>₹{price}</h6>
          </Card.Text>
          <Button variant="link">
            <FaEye size={25} />
          </Button>
          <Button variant="link" onClick={handleAddToCart}>
            {Cart ? <IoCartOutline size={25} /> : <IoCart size={25} />}
          </Button>

        
          <Button
            className="text-danger"
            variant="link"
            onClick={()=>setFav(!fav)}
          >
            {fav ? <AiFillHeart size={25} /> : <AiOutlineHeart size={25} />}
          </Button>
        </Card.Body>
      </Card>
    </div>
      
    </>
  );
};
export default ProductCard;
