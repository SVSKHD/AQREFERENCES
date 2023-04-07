import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const  AquaCommonCarousel = (props) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
     <Carousel.Item>
            <img
              className="d-block w-100"
              src={props.image}
              alt="Aquakart slides"
            />
          </Carousel.Item>
    </Carousel>
  );
}

export default AquaCommonCarousel


