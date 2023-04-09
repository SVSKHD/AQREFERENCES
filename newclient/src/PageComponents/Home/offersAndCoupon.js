import {useState , useEffect} from "react"
import { Card } from "react-bootstrap";
import {getCoupons} from "../../services/coupon"
const AqOffersAndCoupon = () => {
 
    useEffect(()=>{
     populateCoupons()
    },[])

  const [coupons , setCoupons] = useState([])
  
  const populateCoupons = () =>{
    getCoupons().then((res)=>{
        console.log("coupons" , res.data)
    })
  }
  return (
    <>
      <div className="container mb-3">
        <div className="row">
          <div className="col-md-8 col-lg-8 col-xs-12 col-sm-12">
            <Card>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4 col-lg-4 col-xs-12 col-sm-12">
            <Card>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};
export default AqOffersAndCoupon;
