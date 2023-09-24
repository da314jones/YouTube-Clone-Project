import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "./AppNavbar.css";

export default function NavBar() {
  return (
    <Navbar className="navbar-script ">
      <Container className="nav_container">
        <Navbar.Brand as={Link} to="/">
          YouTube{" "}
        </Navbar.Brand>
        <Navbar.Brand className="about" as={Link} to="/about">
          About:{" "}
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
