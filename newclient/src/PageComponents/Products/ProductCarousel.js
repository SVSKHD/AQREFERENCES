import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
const AqProductCarousel = (props) => {
  return (
    <>
      <Carousel variant="dark" className="shadow-lg img-thumbnail mb-3">
        {props.images.map((r, i) => (
          <Carousel.Item>
            <img className="d-block w-100" src={r.url} alt="Aquakart Products" />
            {/* <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};
export default AqProductCarousel;
