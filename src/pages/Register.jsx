import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ToastMsg from "../components/Toast";

export default function Register() {
  const NAME_REGEX = /^([a-zA-Z]{2,23}\s[a-zA-Z]{2,23})$/;
  const USER_REGEX = /^[a-zA-Z][a-zA-z0-9-_]{3,23}$/;
  const EMAIL_REGEX = /^([a-zA-Z0-9]{2,}@)([a-zA-Z]{2,}.)([a-zA-Z0-9]{2,})$/;
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

  const [validName, setValidName] = useState(false);
  const [validUsername, setValidUsername] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [validPassMatch, setValidPassMatch] = useState(false);

  const [focusName, setFocusName] = useState(false);
  const [focusUsername, setFocusUsername] = useState(false);
  const [focusEmail, setFocusEmail] = useState(false);
  const [focusPassword, setFocusPassword] = useState(false);
  const [focusPassMatch, setFocusPassMatch] = useState(false);

  const [form, setForm] = useState({});

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  useEffect(() => {
    setValidName(NAME_REGEX.test(form.fullname));
    setValidUsername(USER_REGEX.test(form.username) && !!form.username);
    setValidEmail(EMAIL_REGEX.test(form.email));
  }, [form.fullname, form.username, form.email]);

  useEffect(() => {
    setValidPassword(PWD_REGEX.test(form.password));
    setValidPassMatch(form.password === form.passMatch);
  }, [form.password, form.passMatch]);

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState({});

  useEffect(() => {
    setShowToast(false);
  }, [form.fullname, form.username, form.email, form.password, form.passMatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (
      validName &&
      validUsername &&
      validEmail &&
      validPassword &&
      validPassMatch
    ) {
      const [first, last] = form.fullname.split(" ");

      const newUserData = {
        FirstName: first,
        LastName: last,
        Password: form.password,
        Email: form.email,
        UserTypeId: 0,
      };

      console.log(newUserData);

      fetch("https://localhost:7020/api/User/createUser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUserData),
      })
        .then((resp) => resp.json())
        .then((resp) => {
          console.log(resp);

          setToastMessage({
            title: "Registration successful",
            body: "Account created!",
            status: "success",
          });

          setShowToast(true);
        })
        .catch((response) => {
          console.error(response.status);

          setToastMessage({
            title: "Registration failed",
            body: "Error: " + response.status,
            status: "danger",
          });

          setShowToast(true);
        });
    } else {
      setToastMessage({
        title: "Registration failed",
        body: "Please check all forms and try again",
        status: "danger",
      });

      setShowToast(true);
    }
  };

  return (
    <div className="register">
      <Container>
        {showToast ? (
          <ToastMsg
            title={toastMessage.title}
            body={toastMessage.body}
            status={toastMessage.status}
          />
        ) : (
          <></>
        )}
        <h2>Register your account</h2>
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="userFullName">
            <Row>
              <Form.Label>Name</Form.Label>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Enter your full name..."
                  required
                  value={form.fullname}
                  onChange={(e) => setField("fullname", e.target.value)}
                  onFocus={() => {
                    setFocusName(true);
                  }}
                  isValid={validName}
                  isInvalid={!validName && focusName}
                />
                <Form.Control.Feedback type="invalid">
                  2 to 24 characters.
                  <br />
                  Must begin with a letter.
                </Form.Control.Feedback>
              </Col>
            </Row>
          </Form.Group>

          <Form.Group className="mb-3" controlId="userName">
            <Row>
              <Form.Label>Username</Form.Label>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Enter your username..."
                  required
                  value={form.username}
                  onChange={(e) => setField("username", e.target.value)}
                  onFocus={() => {
                    setFocusUsername(true);
                  }}
                  isValid={validUsername}
                  isInvalid={!validUsername && focusUsername}
                />
                <Form.Control.Feedback type="invalid">
                  4 to 24 characters.
                  <br />
                  Must begin with a letter.
                  <br />
                  Letters, numbers, underscores, hyphens allowed.
                </Form.Control.Feedback>
              </Col>
            </Row>
          </Form.Group>

          <Form.Group className="mb-3" controlId="userEmail">
            <Row>
              <Form.Label>Email address</Form.Label>
              <Col>
                <Form.Control
                  type="email"
                  placeholder="Enter your email address..."
                  required
                  value={form.email}
                  onChange={(e) => setField("email", e.target.value)}
                  onFocus={() => {
                    setFocusEmail(true);
                  }}
                  isValid={validEmail}
                  isInvalid={!validEmail && focusEmail}
                />
                <Form.Control.Feedback type="invalid">
                  Must contain a valid email.
                </Form.Control.Feedback>
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
                  value={form.password}
                  onChange={(e) => setField("password", e.target.value)}
                  onFocus={() => {
                    setFocusPassword(true);
                  }}
                  isValid={validPassword}
                  isInvalid={!validPassword && focusPassword}
                />
                <Form.Control.Feedback type="invalid">
                  8 to 24 characters.
                  <br />
                  Must include uppercase and lowercase letters, a number and a
                  special character (!@#$%).
                </Form.Control.Feedback>
              </Col>
            </Row>
          </Form.Group>

          <Form.Group className="mb-3" controlId="userPasswordConfirm">
            <Row>
              <Form.Label>Confirm Password</Form.Label>
              <Col>
                <Form.Control
                  type="password"
                  placeholder="Enter your password again..."
                  required
                  value={form.passMatch}
                  onChange={(e) => setField("passMatch", e.target.value)}
                  onFocus={() => {
                    setFocusPassMatch(true);
                  }}
                  isValid={validPassMatch && form.passMatch}
                  isInvalid={!validPassMatch && focusPassMatch}
                />
                <Form.Control.Feedback type="invalid">
                  Must match password field.
                </Form.Control.Feedback>
              </Col>
            </Row>
          </Form.Group>

          <Button variant="success" type="submit">
            Sign Up
          </Button>
        </Form>
        <p className="col-12">
          Already have an account? <Link to="/signin">Sign in</Link>.
        </p>
      </Container>
    </div>
  );
}
