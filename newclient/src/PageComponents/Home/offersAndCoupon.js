import { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { getCoupons } from "../../services/coupon";
import { MdDashboard } from "react-icons/md";
import { FaUser, FaSignOutAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import useAuthStore from "../../zustStore/Auth";

const AqOffersAndCoupon = () => {
  useEffect(() => {
    populateCoupons();
  }, []);

  const [coupons, setCoupons] = useState([]);

  const { user } = useSelector((state) => ({ ...state }));
  const populateCoupons = () => {
    getCoupons().then((res) => {
      setCoupons(res.data);
    });
  };
  const toggleDialogStatus = useAuthStore((state) => state.toggleDialog);
  const toggleSignupButton = () => {
    toggleDialogStatus();
  };

  return (
    <>
      <div className="container mb-3">
        <div className="row">
          <div className="col-md-8 col-lg-8 col-xs-12 col-sm-12">
            <Card className="aq-offer-card aq-coupon-card text-white mb-2">
              <Card.Body>
                <Card.Title>Existing Coupons</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="link">test</Button>
              </Card.Body>
            </Card>
          </div>

          <div className="col-md-4 col-lg-4 col-xs-12 col-sm-12">
            {user ? (
              <Card className="aq-offer-card aq-welcome-card text-white">
                <Card.Body>
                  <Card.Title>Welcome Back</Card.Title>
                  <Card.Text className="display-6">{user.name}</Card.Text>
                  <Button variant="link" className="text-white">
                    <MdDashboard size={25} />
                  </Button>
                  <Button variant="link" className="text-white">
                    <FaUser size={25} />
                  </Button>
                  <Button variant="link" className="text-white">
                    <FaSignOutAlt size={25} />
                  </Button>
                </Card.Body>
              </Card>
            ) : (
              <Card
                onClick={toggleDialogStatus}
                className="aq-offer-card aq-welcome-card text-white"
              >
                <Card.Body>
                  <Card.Text className="text-center">
                    <button
                      onClick={() => toggleDialogStatus}
                      className="btn btn-lg text-white"
                    >
                      Please Login for your orders and many more
                    </button>
                  </Card.Text>
                </Card.Body>
              </Card>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default AqOffersAndCoupon;
