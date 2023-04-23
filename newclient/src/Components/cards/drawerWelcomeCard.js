import { Card, Button } from "react-bootstrap";
import { MdDashboard } from "react-icons/md";
import { FaUser, FaSignOutAlt } from "react-icons/fa";
const DrawerWelcomeCard = (props) => {
    const {name , email} = props
  return (
    <>
      <Card className="aq-offer-card aq-welcome-card text-white mb-3 shadow-lg">
        <Card.Body>
          <Card.Title>Welcome Back</Card.Title>
          <Card.Text className="display-6">{name}</Card.Text>
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
    </>
  );
};
export default DrawerWelcomeCard;
