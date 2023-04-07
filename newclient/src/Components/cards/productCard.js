import { Button, Carousel } from "react-bootstrap";
import Card from "react-bootstrap/Card";
//import AQ from "../../Assests/Default.png";
//import AquaCommonCarousel from "../carousels/commonCarousel";

const productCard = ({ r }) => {
  const { title, description, images } = r;
  return (
    <>
      <Card style={{ width: "22rem" }}>
        <Carousel>
          {(images.map((r,i)=>(
            <Carousel.Item>
            <img
              className="d-block w-100"
              src={r.url}
              alt="Aquakart Slides"
            />
           
          </Carousel.Item>
          )))}
          
        </Carousel>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{`${description.substring(0, 25)}...`}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );
};
export default productCard;
