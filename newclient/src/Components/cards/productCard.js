import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
//import AquaCommonCarousel from "../carousels/commonCarousel";

const productCard = (props) => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top">
        </Card.Img>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );
};
export default productCard;
