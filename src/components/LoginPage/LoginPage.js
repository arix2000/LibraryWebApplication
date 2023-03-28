import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import React, { useState } from 'react';
import UserManager from "../admin_panel/utils/UserManager";

export default function LoginPage() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const userManager = new UserManager();
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const users = userManager.getUsers();
    const user = users.find((u) => u.login === login && u.password === password);
    if (user) {
      setMessage('Zalogowano!');
      console.log('Zalogowano!');
    } else {
      console.log(users);
      setMessage('Nieprawidłowy email lub hasło');
      console.log('Nieprawidłowy email lub hasło');
    }
  };

  return (
    <div className="background-color">
      <div className="background-color">
        <Container>
          <Row className="vh-100 d-flex justify-content-center align-items-center">
            <Col md={16} lg={6} xs={24}>
              <Card className="shadow label-color">
                <Card.Body>
                  <div className="mb-3 mt-md-4">
                    <h2 className="text-center text-light">Fish library</h2>
                    {message && <p className={message === 'Zalogowano!' ? 'text-success' : 'text-danger'}>{message}</p>}
                    <div className="mb-3">
                      <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label className="text-center text-light">
                            Email adress
                          </Form.Label>
                          <Form.Control
                            className="bg-secondary border border-dark text-light"
                            type="login"
                            placeholder="Enter login"
                            value={login}
                            onChange={(event) => setLogin(event.target.value)}
                          />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                          <Form.Label className="text-light">Password</Form.Label>
                          <Form.Control
                            className="bg-secondary border border-dark text-light"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                          />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                          <p className="small text-center">
                            <a className="text-light" href="#!">
                              Forgot password?
                            </a>
                          </p>
                        </Form.Group>
                        <div className="d-grid button-color">
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
    </div>
  );
}