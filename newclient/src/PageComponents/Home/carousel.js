import { Carousel, Button } from "react-bootstrap";
import AQ from "../../Assests/Default.png";

const AqHomeCarousel = () => {
  return (
    <>
      <Carousel 
      variant="dark" 
      className="shadow-lg img-thumbnail mb-3" 
      controls={false}
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={AQ}
            alt="First slide"
            height="400"
          />
          <Carousel.Caption className="text-start aq-home-carousel">
          <Button>Hello First</Button>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={AQ}
            alt="Second slide"
            height="400"
          />

          <Carousel.Caption className="text-start aq-home-carousel">
            <Button>Hello second</Button>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};
export default AqHomeCarousel;
