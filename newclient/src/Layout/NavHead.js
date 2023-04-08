import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  InputGroup,
  Badge,
} from "react-bootstrap";
import { FaCartArrowDown } from "react-icons/fa";

function AquaNavHead() {
  const { user, cart } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();

  return (
    <Navbar className="bg-white text-white" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">Aquakart</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/shop">Shop</Nav.Link>
            <Nav.Link href="/about">About-us</Nav.Link>
          </Nav>

          <Button variant="link">
            <FaCartArrowDown size={25} />
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {cart.length}
            </span>
          </Button>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AquaNavHead;
