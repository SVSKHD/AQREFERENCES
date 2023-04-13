import {Container , Button , Navbar} from 'react-bootstrap';
import {FaShoppingBag} from "react-icons/fa"


const AuthHead = () => {
    return (
        <>
            <Navbar>
                <Container fluid>
                    <Navbar.Brand href="#home">AquaKart</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Button href='/shop' variant='link'><FaShoppingBag size={25}/></Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
export default AuthHead
