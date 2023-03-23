import { margin } from "@mui/system";
import { useState } from "react";
import { Button, Col, Form, InputGroup, Modal, Row } from "react-bootstrap";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import "../../styles/admin-panel-styles.css"
import translateRole from "../utils/RoleTranslate";
import UserManager from "../utils/UserManager"

export default function AddEditUserDialog(props) {
    function getSafeUserParameter(param) {
        if (user != null)
            return param();
        else return "";
    }

    const user = props.user;
    const editMode = props.user != null;
    const userManager = new UserManager();

    const [name, setName] = useState(getSafeUserParameter(() => user.name));
    const [surname, setSurname] = useState(getSafeUserParameter(() => user.surname));
    const [login, setLogin] = useState(getSafeUserParameter(() => user.login));
    const [password, setPassword] = useState(getSafeUserParameter(() => user.password));
    const [role, setRole] = useState(getSafeUserParameter(() => user.role));

    const [validated, setValidated] = useState(false);

    const onAcceptClicked = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        if (name != "" && surname != "" && login != "" && password != "") {
            setValidated(true);
        } else {
            setValidated(true);
            return;
        }
        props.onHide();
        if (editMode)
            userManager.updateUser(user.id, name, surname, login, password, role)
        else {
            userManager.addUser(name, surname, login, password, role);
            clearAllParams();
        }
        setValidated(false);
    }

    function clearAllParams() {
        setName("");
        setSurname("");
        setLogin("");
        setPassword("");
        setRole("");
    }

    const [passwordShown, setPasswordShown] = useState(false);
    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header>
                    <Modal.Title>
                        {editMode ? <span>Edytuj użytkownika</span> : <span>Dodaj użytkownika</span>}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form noValidate validated={validated}>
                        <Form.Group as={Row}>
                            <Form.Label column>Imię: </Form.Label>
                            <Col xs={9} lg={10}>
                                <Form.Control required defaultValue={name} className="default-text-field"
                                    onChange={(event) => setName(event.target.value)} />
                                <Form.Control.Feedback type="invalid">Imię nie może być pusty!</Form.Control.Feedback>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="form-margin-top">
                            <Form.Label column>Nazwisko: </Form.Label>
                            <Col xs={9} lg={10}>
                                <Form.Control required defaultValue={surname} className="default-text-field"
                                    onChange={(event) => setSurname(event.target.value)} />
                                <Form.Control.Feedback type="invalid">Nazwisko nie może być puste!</Form.Control.Feedback>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="form-margin-top">
                            <Form.Label column>Login: </Form.Label>
                            <Col xs={9} lg={10}>
                                <Form.Control required defaultValue={login} placeholder={"np. ministrant2137"}
                                    className="default-text-field" onChange={(event) => setLogin(event.target.value)} />
                                <Form.Control.Feedback type="invalid">Login nie może być pusty!</Form.Control.Feedback>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="form-margin-top">
                            <Form.Label column>Hasło: </Form.Label>
                            <Col xs={9} lg={10}>
                                <InputGroup hasValidation>
                                    <Form.Control required defaultValue={password} type={passwordShown ? "text" : "password"}
                                        className="default-text-field" onChange={(event) => setPassword(event.target.value)} />
                                    <span size="sm" className="password-visibility-button password-visibility-inline"
                                        onClick={() => setPasswordShown(!passwordShown)}>
                                        {passwordShown
                                            ? <AiFillEyeInvisible style={{ width: 20, height: 20 }} />
                                            : <AiFillEye style={{ width: 20, height: 20 }} />}
                                    </span>
                                    <Form.Control.Feedback type="invalid">Hasło nie może być puste!</Form.Control.Feedback>
                                </InputGroup>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="form-margin-top">
                            <Form.Label column>Rola: </Form.Label>
                            <Col xs={9} lg={10}>
                                <Form.Select noValidate defaultValue={role} className="default-selector"
                                    onChange={(event) => { setRole(translateRole(event.target.value)) }}>
                                    <option>{translateRole("user")}</option>
                                    <option>{translateRole("admin")}</option>
                                    <option>{translateRole("librarian")}</option>
                                </Form.Select>
                            </Col>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="default-button-radius" variant="secondary"
                        onClick={() => { props.onHide(); setValidated(false) }}>Close</Button>
                    <Button className="default-button-radius" onClick={onAcceptClicked}>
                        {editMode ? <span>Edytuj użytkownika</span> : <span>Dodaj użytkownika</span>}
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}