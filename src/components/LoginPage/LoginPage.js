import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import React, { useState } from 'react';
import UserManager from "../AdminPanel/utils/UserManager";
import { Link, useNavigate } from "react-router-dom";
import AppRoutes from "../../common/AppRoutes";

export default function LoginPage() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const userManager = new UserManager();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const isLoginSuccess = userManager.getUsers().find((u) => u.login === login && u.password === password);
  };

  return (
    <div style={{ backgroundColor: "#303030" }}>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center" >
          <Col md={16} lg={6} xs={24}>
            <Card className="shadow" style={{ borderRadius: '2rem', backgroundColor: "#2a2a2a" }}>
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="text-center text-light">Fish library</h2>
                  <div className="mb-3">
                    <Form onSubmit={handleSubmit}>
                      <Form.Group className="mb-3">
                        <Form.Label className="text-center text-light">
                          Login
                        </Form.Label>
                        <Form.Control
                          className="default-text-field"
                          type="login"
                          placeholder="Enter login"
                          value={login}
                          onChange={(event) => setLogin(event.target.value)}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className="text-light">Password</Form.Label>
                        <Form.Control
                          className="default-text-field"
                          type="password"
                          placeholder="Password"
                          value={password}
                          onChange={(event) => setPassword(event.target.value)}
                        />
                      </Form.Group>
                      <div className="d-grid button-color text-center" variant="secondary">
                        <Button className="button-radius" style={{ width: 120 }} onClick={() => { navigate(AppRoutes.homePage) }}>Login</Button>
                      </div>
                    </Form>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
