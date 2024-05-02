// LoginPage.js
import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import ConsumerService from "../service/ConsumerService";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await ConsumerService.login(email, password);
      console.log("Login successful:", response);
      // Redirect or perform other actions upon successful login
      navigate("display");
    } catch (error) {
      setError(error);
    }
  };

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col xs={10} sm={8} md={6}>
          <h2 className="text-center mb-4">Login</h2>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </Form.Group>

            {error && <p className="text-danger">{error}</p>}

            <Button
              variant="primary"
              type="submit"
              block
              onClick={handleSubmit}
            >
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
