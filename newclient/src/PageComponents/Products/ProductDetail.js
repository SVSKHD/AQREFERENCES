import Card from "react-bootstrap/Card";
const ProductDetail = ({ product }) => {
  const { title, description , price , quantity} = product;
  const handleToAddWishList = () =>{

  }
  return (
    <Card className="shadow-lg">
      <Card.Body className="p-5">
        <h2 className="display-5 p-2">{title}</h2>
        <hr/>
        <h4 className="p-2">{description}</h4>
        <h4 className="p-2 text-success">₹{price}</h4>
        {product.quantity<1?(<h4 className="p-2 text-danger">Out Of Stock</h4>):(<h4 className="p-2 text-success">Available</h4>)}
        <h5 className="p-2">Category : </h5>
      </Card.Body>
    </Card>
  );
};
export default ProductDetail;
