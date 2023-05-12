import { Card, Badge } from "react-bootstrap";
import { FaCheckCircle, FaRegTimesCircle } from "react-icons/fa";
const ProductDetail = ({ product }) => {
  const {
    title,
    description,
    price,
    quantity,
    color,
    brand,
    shipping,
    subs,
    category,
  } = product;
  const handleToAddWishList = () => {};
  return (
    <Card className="shadow-lg">
      <Card.Body className="p-5">
        <h2 className="display-5 p-2">{title}</h2>
        <hr />
        <h4 className="p-2">{description}</h4>
        <h4 className="p-2 text-success">₹{price}</h4>
        {product.quantity < 1 ? (
          <h4 className="p-2 text-danger">Out Of Stock</h4>
        ) : (
          <h4 className="p-2 text-success">Available</h4>
        )}
        <h5 className="p-2">
          Shipping :{" "}
          {shipping == "Yes" ? (
            <FaCheckCircle className="text-success" />
          ) : (
            <FaRegTimesCircle className="text-danger" />
          )}
        </h5>
        <h5 className="p-2">Quantity : {quantity}</h5>
        <h5 className="p-2">Color : {color}</h5>
        <h5 className="p-2">Brand : {brand}</h5>
        <h5 className="p-2">
          Category :{" "}
          {category ? (
            <>
              <Badge bg="dark">{category.name}</Badge>
            </>
          ) : (
            "No Categories Linked"
          )}{" "}
        </h5>
        <h6 className="p-2">
          Sub-Category :{" "}
          {subs ? (
            <>
              {subs.map((r, i) => (
                <>
                  <Badge bg="secondary" key={i}>
                    {r.name}
                  </Badge>
                </>
              ))}
            </>
          ) : (
            "No Sub-Categories Linked"
          )}{" "}
        </h6>
      </Card.Body>
    </Card>
  );
};
export default ProductDetail;
