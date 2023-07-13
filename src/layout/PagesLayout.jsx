import { Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function PagesLayout() {
  return (
    <>

      <Navbar bg="primary" data-bs-theme="dark">
        <Container className="navbar-container">
          <Navbar.Brand>Quote It</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="register">Register</Nav.Link>
            <Nav.Link href="faq">FAQ</Nav.Link>
            <Nav.Link href="test">test</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


      <main>
        <Outlet />
      </main>



    </>
  );
}
