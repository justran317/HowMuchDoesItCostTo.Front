import { useEffect, useState } from "react";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

export default function ToastMsg(props) {
  const [show, setShow] = useState(true);

  let toastMessage = {
    title: props.title,
    body: props.body,
    status: props.status,
  };

  return (
    <>
      <ToastContainer
        className="p-3"
        position="top-center"
        style={{ zIndex: 1 }}
      >
        <Toast
          onClose={() => setShow(false)}
          show={show}
          delay={5000}
          autohide
          bg={toastMessage.status}
        >
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">{toastMessage.title}</strong>
          </Toast.Header>
          <Toast.Body>{toastMessage.body}</Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
}
