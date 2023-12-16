import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <Navbar bg="black" variant="dark">
      <Container className="d-flex justify-content-between">
        <div className="m-30">
          <Link to="/" className="text-white ms-3 text-decoration-none">
            Home
          </Link>
          <Link to="/Contacto" className="text-white ms-3 text-decoration-none">
            Contacto
          </Link>
        </div>
        <div className="d-flex">
          <Navbar.Brand>Happy Cake</Navbar.Brand>
        </div>
      </Container>
    </Navbar>
  );
};

export default Nav;