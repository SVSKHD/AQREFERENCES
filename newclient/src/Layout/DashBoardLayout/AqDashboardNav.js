import { Container, Nav, Navbar } from "react-bootstrap";
import AQ from "../../Assests/logo.png";
import { FaHome, FaShoppingBag } from "react-icons/fa";

const AqDashNav = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={AQ} alt="Aquakart" height="50" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="text-dark">
              <FaHome size={28} />
            </Nav.Link>
            <Nav.Link href="#link" className="text-dark">
              <FaShoppingBag size={25} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AqDashNav;
