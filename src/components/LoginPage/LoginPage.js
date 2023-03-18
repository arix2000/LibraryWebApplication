import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="background-color">
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={16} lg={6} xs={24}>
            <Card className="shadow label-color">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="text-center text-light">Fish library</h2>
                  <div className="mb-3">
                    <Form>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center text-light">
                            Email adress
                        </Form.Label>
                        <Form.Control className="bg-secondary border border-dark text-light" type="email" placeholder="Enter email" />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword">
                        <Form.Label className="text-light">
                            Password
                        </Form.Label>
                        <Form.Control className="bg-secondary border border-dark text-light" type="password" placeholder="Password" />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox">
                        <p className="small text-center">
                          <a className="text-light" href="#!">
                            Forgot password?
                          </a>
                        </p>
                      </Form.Group>
                      <div className="d-grid button-color">
                        <Link to="search">
                          <Button type="submit">
                            Login
                          </Button>
                        </Link>
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