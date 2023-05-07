import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const CompareExpandedCard = ({ product }) => {
  const { title, description, images} = product;
  return (
    <Card draggable="true" style={{ width: "20rem" }}>
      <Card.Img variant="top" src={images[0].url}  />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default CompareExpandedCard;
