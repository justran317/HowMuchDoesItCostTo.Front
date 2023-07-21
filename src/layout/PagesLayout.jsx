import { Outlet, useLocation } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function PagesLayout() {
  const location = window.location.pathname;
  
  return (
    <>
      { location === "/search" ?
          <Row style={{paddingTop: "40px", paddingLeft: "32px", minHeight: "72px"}}>
              <Col><h1>Sick Logo</h1></Col>
              <Col>
              </Col>
              <Col>Sign In fields</Col>
          </Row>
      :
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
      }


      <main>
        <Outlet />
      </main>



    </>
  );
}
