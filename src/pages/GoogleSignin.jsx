import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthProvider";

import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ToastMsg from "../components/Toast";

export default function GoogleSignin() {
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const [fetchData, setFetchData] = useState("");
  const { setAuth } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://localhost:7020/api/User/google-signin", {
      // method: "get",
      // headers: {
      //   "access-control-allow-origin": "*",
      // },
      redirect: "follow",
      credentials: "include",
      mode: "no-cors",
      // referrerPolicy: "strict-origin-when-cross-origin",
    });
    // .then((response) => response.json())
    // .then((response) => console.log(response))
    // .catch((resp) => console.error(resp));
  };

  return (
    <div className="signin">
      <Container>
        <h2>Sign In</h2>
        <Form onSubmit={handleSubmit}>
          <Button variant="success" type="submit">
            Sign In with Google
          </Button>
        </Form>
      </Container>
    </div>
  );
}
