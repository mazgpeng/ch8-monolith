import { useEffect, useState } from "react";
import { Button, Card, Col, FloatingLabel, Form, Row } from "react-bootstrap";

// Dummy update, not saved to local, only to show the value
const UpdatePlayerForm = ({ setRecentUpdate }) => {
  const [data, setData] = useState();
  const [updated, setUpdated] = useState({
    username: "",
    password: "",
    email: "",
    experience: "",
    level: "",
  });

  const [validated, setValidated] = useState(false);

  const handleUsernameChange = (e) =>
    setUpdated({ ...updated, username: e.target.value });

  const handlePasswordChange = (e) =>
    setUpdated({ ...updated, password: e.target.value });

  const handleEmailChange = (e) =>
    setUpdated({ ...updated, email: e.target.value });

  const handleExperienceChange = (e) =>
    setUpdated({ ...updated, experience: e.target.value });

  const handleLevelChange = (e) =>
    setUpdated({ ...updated, level: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.currentTarget.checkValidity() === false) {
      e.stopPropagation();
    } else {
      setRecentUpdate(updated);
    }

    setValidated(true);
  };

  useEffect(() => {
    const localData = localStorage.getItem("playerData");
    setData(JSON.parse(localData));
  }, []);

  return (
    <Card className="shadow">
      <Card.Title className="text-center py-3">Update Player</Card.Title>
      <Card.Body>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <FloatingLabel
            controlId="updateUsername"
            label="Username"
            className="my-3"
          >
            <Form.Select
              aria-label="Select Username"
              onChange={handleUsernameChange}
              required
            >
              <option value="">-- Select Username --</option>
              {data
                ? data.map((item, key) => (
                    <option key={key} value={item.username}>
                      {item.username}
                    </option>
                  ))
                : null}
            </Form.Select>
          </FloatingLabel>

          <FloatingLabel controlId="updatePassword" label="Password">
            <Form.Control
              type="text"
              onChange={handlePasswordChange}
              placeholder="password"
              minLength="5"
              pattern="\S+"
            />
          </FloatingLabel>

          <FloatingLabel controlId="updateEmail" label="Email" className="my-3">
            <Form.Control
              type="email"
              placeholder="email"
              onChange={handleEmailChange}
            />
          </FloatingLabel>

          <Row>
            <Col>
              <FloatingLabel
                controlId="updateExperience"
                label="Experience"
                className="mb-3"
              >
                <Form.Control
                  type="number"
                  placeholder="2500"
                  onChange={handleExperienceChange}
                />
              </FloatingLabel>
            </Col>

            <Col>
              <FloatingLabel
                controlId="updateLevel"
                label="Level"
                className="mb-3"
              >
                <Form.Control
                  type="number"
                  placeholder="99"
                  onChange={handleLevelChange}
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Button variant="primary" type="submit">
            Update Player
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default UpdatePlayerForm;
