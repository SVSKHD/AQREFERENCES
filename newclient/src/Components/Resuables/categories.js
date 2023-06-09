import { useState, useEffect } from "react";
import { getCategories } from "../../services/category";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import AqCategoryCard from "../cards/categoryCard";

const AquaMapCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((res) => {
      setCategories(res.data);
    });
  }, []);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="m-2">
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        showDots={false}
        autoPlay={true}
        autoPlaySpeed={4000}
        infinite
        customLeftArrow={<FaChevronLeft className="bg-dark" size={25} />}
        customRightArrow={<FaChevronRight size={25} />}
      >
        {categories.map((r, i) => (
          <>
            <AqCategoryCard key={i} title={r.name} slug={r.slug} />
          </>
        ))}
      </Carousel>
    </div>
  );
};
export default AquaMapCategories;
