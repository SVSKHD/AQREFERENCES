import Card from "react-bootstrap/Card";
const ProductDetail = ({product}) => {
  const {title , description} = product
    return (
    <Card className="shadow-lg">
      <Card.Body>
        <h2 className="p-2">{title}</h2>
        <h4 className="p-2">{description}</h4>
      </Card.Body>
    </Card>
  );
};
export default ProductDetail;
