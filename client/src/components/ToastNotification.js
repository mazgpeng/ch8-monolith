import { Toast } from "react-bootstrap";

const ToastNotification = ({ showToast, setShowToast, title, msg }) => {
  const styles = {
    absolute: {
      position: "absolute",
      top: "1rem",
      left: 0,
      right: 0,
      margin: "auto",
    },
  };

  return (
    <Toast
      style={styles.absolute}
      onClose={() => setShowToast(false)}
      show={showToast}
      delay={2500}
      autohide
    >
      <Toast.Header>
        <strong className="me-auto">{title}</strong>
      </Toast.Header>
      <Toast.Body className="bg-light">{msg}</Toast.Body>
    </Toast>
  );
};

export default ToastNotification;
