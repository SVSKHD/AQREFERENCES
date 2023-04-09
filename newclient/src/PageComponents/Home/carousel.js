import { Carousel , Button} from "react-bootstrap"
import AQ from "../../Assests/Default.png"

const AqHomeCarousel = () =>{
return(
    <>
       <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={AQ}
          alt="First slide"
          height="1000"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={AQ}
          alt="Second slide"
          height="1000"
        />

        <Carousel.Caption className="text">
            <Button>Hello second</Button>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
)
}
export default AqHomeCarousel