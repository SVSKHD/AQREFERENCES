import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const AquaCommonCarousel = (props) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {props.images.map((r, i) => (
        <Carousel.Item>
          <img className="d-block w-100" src={r.url} alt="Aquakart slides" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default AquaCommonCarousel;
