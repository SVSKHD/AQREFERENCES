import { Button, Card } from "react-bootstrap";
import AQUA from "../Assests/logo.png";
import { FiPhoneCall, FiInbox } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const AquaFooter = () => {
  let Year = new Date().getFullYear();
  return (
    <>
      <Card body className="aqua-footer">
        <div className="row">
          <div className="col-lg-5 col-md-6 col-xs-6 col-sm-6 text-center">
            <Button variant="link">
            <FiPhoneCall size={25} />
            </Button>
          </div>
          <div className="col-lg-5 col-md-6 col-xs-6 col-sm-6 text-center">
            <Button variant="link">
            <FiInbox size={25} />
            </Button>      
          </div>
        </div>
        <hr />
        <div className="container row">
          <div className="col-md-4 col-lg-4 col-xs-12 col-md-12">
            <img src={AQUA} height="100" alt="AquaKart Logo" />
            <div className="container p-2">
              Hey there..! we are best sellers for softeners and sand filters
              and many other filters which wil help to give great water , its
              all about water purifiers and softeners.
            </div>
            <br/>
            <div className="container">
              <h6>Follow us on</h6>
              <Button variant="link">
                <FaInstagram size={35} />
              </Button>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 col-xs-12 col-md-12"></div>
          <div className="col-md-4 col-lg-4 col-xs-12 col-md-12">
            
          </div>
        </div>
        <Card className="bg-primary">
          <Card.Body className="aqua-footer-pad">
            <div className="text-center">
              <img src={AQUA} height="30" alt="AquaKart Logo" />
              <h6 className="text-white text-center">Aquakart © {Year}</h6>
            </div>
          </Card.Body>
        </Card>
      </Card>
    </>
  );
};

export default AquaFooter;
