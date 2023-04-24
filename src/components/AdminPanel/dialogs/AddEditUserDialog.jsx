import { useState } from "react";
import { Button, Col, Form, InputGroup, Modal, Row } from "react-bootstrap";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import styles from "../../styles/adminPanel.module.css"
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
            userManager.updateUserPersonalInfo(user.id, name, surname, login, password, role)
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
                <div className={styles.adminPanelModalContent}>
                    <Modal.Header>
                        <Modal.Title>
                        {editMode ? <span>Edit User</span> : <span>Add User</span>}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form noValidate validated={validated}>
                            <Form.Group as={Row}>
                                <Form.Label column>Name: </Form.Label>
                                <Col xs={9} lg={10}>
                                    <Form.Control required defaultValue={name} className="default-text-field"
                                        onChange={(event) => setName(event.target.value)} />
                                    <Form.Control.Feedback type="invalid">Name cannot be empty!</Form.Control.Feedback>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className={styles.formMarginTop}>
                                <Form.Label column>Surname: </Form.Label>
                                <Col xs={9} lg={10}>
                                    <Form.Control required defaultValue={surname} className="default-text-field"
                                        onChange={(event) => setSurname(event.target.value)} />
                                    <Form.Control.Feedback type="invalid">Surname cannot be empty!</Form.Control.Feedback>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className={styles.formMarginTop}>
                                <Form.Label column>Login: </Form.Label>
                                <Col xs={9} lg={10}>
                                    <Form.Control required defaultValue={login} placeholder={"np. ministrant2137"}
                                        className="default-text-field" onChange={(event) => setLogin(event.target.value)} />
                                    <Form.Control.Feedback type="invalid">Login cannot be empty!</Form.Control.Feedback>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className={styles.formMarginTop}>
                                <Form.Label column>Password: </Form.Label>
                                <Col xs={9} lg={10}>
                                    <InputGroup hasValidation>
                                        <Form.Control required defaultValue={password} type={passwordShown ? "text" : "password"}
                                            className={`default-text-field ${styles.passRadius}`} onChange={(event) => setPassword(event.target.value)}/>
                                        <span size="sm" className={`${styles.passwordVisibilityButton} ${styles.passwordVisibilityInline}`}
                                            onClick={() => setPasswordShown(!passwordShown)}>
                                            {passwordShown
                                                ? <AiFillEyeInvisible style={{ width: 20, height: 20 }} />
                                                : <AiFillEye style={{ width: 20, height: 20 }} />}
                                        </span>
                                        <Form.Control.Feedback type="invalid">Password cannot be empty!</Form.Control.Feedback>
                                    </InputGroup>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className={styles.formMarginTop}>
                                <Form.Label column>Role: </Form.Label>
                                <Col xs={9} lg={10}>
                                    <Form.Select  noValidate defaultValue={role} className={styles.defaultSelector}
                                        onChange={(event) => { setRole(event.target.value) }}>
                                        <option>user</option>
                                        <option>admin</option>
                                        <option>librarian</option>
                                    </Form.Select>
                                </Col>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className={styles.defaultButtonRadius} variant="secondary"
                            onClick={() => { props.onHide(); setValidated(false) }}>Cancel</Button>
                        <Button className={styles.defaultButtonRadius} onClick={onAcceptClicked}>
                            {editMode ? <span>Apply changes</span> : <span>Add user</span>}
                        </Button>
                    </Modal.Footer>
                </div>
            </Modal>
        </>
    )
}