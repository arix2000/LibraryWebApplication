import { Col, Button, Row, Container, Card, Form, InputGroup } from "react-bootstrap";
import React, { useState } from 'react';
import UserManager from "../AdminPanel/utils/UserManager";
import { useNavigate } from "react-router-dom";
import AppRoutes from "../../common/AppRoutes";
import ErrorToast from "../UiCommon/ErrorToast";
import styles from "../styles/adminPanel.module.css"
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import SessionManager from "../../common/SessionManager";

export default function LoginPage() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [showErrorMassage, setShowErrorMassage] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const userManager = new UserManager();
  const sessionManager = new SessionManager();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userFound = userManager.getUsers().find((u) => u.login === login && u.password === password);
    if (userFound) {
      sessionManager.login(userFound);
      navigate(AppRoutes.homePage);
    }
    else
      setShowErrorMassage(true);
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
                        <InputGroup>
                          <Form.Control
                            className="default-text-field"
                            type={passwordShown ? "text" : "password"}
                            placeholder="Password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                          />
                          <span size="sm" className={`${styles.passwordVisibilityButton} ${styles.passwordVisibilityInline}`}
                            onClick={() => setPasswordShown(!passwordShown)}>
                            {passwordShown
                              ? <AiFillEyeInvisible style={{ width: 20, height: 20 }} />
                              : <AiFillEye style={{ width: 20, height: 20 }} />}
                          </span>
                        </InputGroup>
                      </Form.Group>
                      <div className="d-grid button-color text-center" variant="secondary">
                        <Button type="submit" className="button-radius" style={{ width: 120 }} onClick={handleSubmit}>Login</Button>
                      </div>
                    </Form>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <ErrorToast text={"Incorrect login or password!"} show={showErrorMassage} setShow={setShowErrorMassage} />
    </div>
  );
}
