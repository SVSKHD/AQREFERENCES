import Card from "react-bootstrap/Card";

const DefaultCardWithShadow = (props) => {
  return (
    <Card className="shadow-lg">
      <Card.Body>
        {props.children}
      </Card.Body>
    </Card>
  );
};

export default DefaultCardWithShadow;
