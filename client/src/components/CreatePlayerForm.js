import { useState } from "react";
import { Card, Form, Button, FloatingLabel, Row, Col } from "react-bootstrap";

const CreatePlayerForm = ({
  stateData,
  setStateDate,
  localData,
  setRecentData,
  setShowToast,
}) => {
  const [validated, setValidated] = useState(false);

  const handleUsernameChange = (e) =>
    setStateDate({ ...stateData, username: e.target.value });

  const handlePasswordChange = (e) =>
    setStateDate({ ...stateData, password: e.target.value });

  const handleEmailChange = (e) =>
    setStateDate({ ...stateData, email: e.target.value });

  const handleExperienceChange = (e) =>
    setStateDate({ ...stateData, experience: e.target.value });

  const handleLevelChange = (e) =>
    setStateDate({ ...stateData, level: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (e.currentTarget.checkValidity() === false) {
      e.stopPropagation();
    } else {
      localData.push(stateData);
      setRecentData(stateData);
      setShowToast(true);
      localStorage.setItem("playerData", JSON.stringify(localData));
    }

    setValidated(true);
  };

  return (
    <Card className="shadow">
      <Card.Title className="text-center py-3">Create Player</Card.Title>
      <Card.Body>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <FloatingLabel
            controlId="formBasicUsername"
            label="Username"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="username"
              onChange={handleUsernameChange}
              value={stateData.username}
              minLength="5"
              pattern="\S+"
              autoComplete="username"
              required
            />
          </FloatingLabel>

          <FloatingLabel controlId="formBasicPassword" label="Password">
            <Form.Control
              type="text"
              placeholder="password"
              onChange={handlePasswordChange}
              value={stateData.password}
              minLength="5"
              pattern="\S+"
              autoComplete="password"
              required
            />
          </FloatingLabel>
          <Form.Text className="text-muted mb-3">
            We'll never share your password with anyone else.
          </Form.Text>

          <FloatingLabel
            controlId="formBasicEmail"
            label="Email"
            className="my-3"
          >
            <Form.Control
              type="email"
              placeholder="email"
              onChange={handleEmailChange}
              value={stateData.email}
            />
          </FloatingLabel>

          <Row>
            <Col>
              <FloatingLabel
                controlId="formBasicExperience"
                label="Experience"
                className="mb-3"
              >
                <Form.Control
                  type="number"
                  placeholder="2500"
                  onChange={handleExperienceChange}
                  value={stateData.experience}
                />
              </FloatingLabel>
            </Col>

            <Col>
              <FloatingLabel
                controlId="formBasicLevel"
                label="Level"
                className="mb-3"
              >
                <Form.Control
                  type="number"
                  placeholder="99"
                  onChange={handleLevelChange}
                  value={stateData.level}
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Button variant="primary" type="submit">
            Create Player
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default CreatePlayerForm;
