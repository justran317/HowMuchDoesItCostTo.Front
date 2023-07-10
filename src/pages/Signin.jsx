import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthProvider";

import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ToastMsg from "../components/Toast";

export default function Signin() {
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const [fetchData, setFetchData] = useState("");
  const { setAuth } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const loginData = {
      Email: username,
      Password: pass,
    };

    console.log(loginData);

    // fetch("https://localhost:7020/api/User/loginUser", {
    fetch("https://localhost:7020/api/User/SignInUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(loginData),
    })
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((resp) => console.error(resp));
  };

  return (
    <div className="signin">
      <Container>
        <h2>Sign In</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="userLogin">
            <Row>
              <Form.Label>Username</Form.Label>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Enter your username..."
                  required
                  autoComplete="off"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Col>
            </Row>
          </Form.Group>

          <Form.Group className="mb-3" controlId="userPassword">
            <Row>
              <Form.Label>Password</Form.Label>
              <Col>
                <Form.Control
                  type="password"
                  placeholder="Enter your password..."
                  required
                  autoComplete="off"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                />
              </Col>
            </Row>
          </Form.Group>

          <Button variant="success" type="submit">
            Sign In
          </Button>
        </Form>
        <p className="col-12">
          Need an account? <Link to="/register">Sign up</Link>.
        </p>
      </Container>
    </div>
  );
}
