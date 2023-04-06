import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import React, { useState } from 'react';
import UserManager from "../admin_panel/utils/UserManager";
import NavBar from "../NavBar/NavBar";

export default function LoginPage() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const userManager = new UserManager();
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const isLoginSuccess = userManager.getUsers().find((u) => u.login === login && u.password === password);
  };

  return (
      <div className="background-color">
        <Container>
          <Row className="vh-100 d-flex justify-content-center align-items-center" >
            <Col md={16} lg={6} xs={24}>
              <Card className="shadow label-color" style={{borderRadius: '2rem'}}>
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
                        <div className="d-grid button-color" variant="secondary">
                          <Button type="submit">Login</Button>
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
