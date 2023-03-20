import { useState } from "react";
import { Button, Col, Form, InputGroup, Modal, Row } from "react-bootstrap";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import "../../styles/admin-panel-styles.css"
import UserManager from "../UserManager"

export default function AddEditUserDialog(props) {
    function getSafeUserParameter(param) {
        if(user != null)
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

    function clearAllParams() {
        setName("");
        setSurname("");
        setLogin("");
        setPassword("");
        setRole("");
    }

    const [passwordShown, setPasswordShown] = useState(false);
    return(
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
                    <Form>
                        <Form.Group as={Row}>
                            <Form.Label column>Imię: </Form.Label>
                            <Col xs={9} lg={10}>
                                <Form.Control defaultValue={name} className="default-text-field" onChange={(event) => setName(event.target.value)}/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="form-margin-top">
                            <Form.Label column>Nazwisko: </Form.Label>
                            <Col xs={9} lg={10}>
                                <Form.Control defaultValue={surname} className="default-text-field" onChange={(event) => setSurname(event.target.value)}/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="form-margin-top">
                            <Form.Label column>Login: </Form.Label>
                            <Col xs={9} lg={10}>
                                <Form.Control defaultValue={login} placeholder={"np. ministrant2137"} 
                                    className="default-text-field" onChange={(event) => setLogin(event.target.value)}/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="form-margin-top">
                            <Form.Label column>Hasło: </Form.Label>
                            <Col xs={9} lg={10}>
                            <InputGroup>
                                <Form.Control defaultValue={password} 
                                    type={passwordShown ? "text" : "password"} className="default-text-field" onChange={(event) => setPassword(event.target.value)}/>
                                <span size="sm" className="passwordVisibilityButton passwordVisibilityInline" onClick={() => setPasswordShown(!passwordShown)}>
                                    {passwordShown 
                                        ? <AiFillEyeInvisible style={{width: 20, height: 20}}/> 
                                        : <AiFillEye style={{width: 20, height: 20}}/>} 
                                </span>
                            </InputGroup>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="form-margin-top">
                            <Form.Label column>Rola: </Form.Label>
                            <Col xs={9} lg={10}>
                            <Form.Select defaultValue={role} className="default-selector" 
                                onChange={(event) => {setRole(event.target.value)}}>
                                <option>user</option>
                                <option>admin</option>
                                <option>librarian</option>
                            </Form.Select>
                            </Col>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="defaultButtonRadius" onClick={props.onHide} variant="secondary">Close</Button>
                    <Button className="defaultButtonRadius" 
                    onClick={() => 
                    {
                        props.onHide(); 
                        if(editMode) 
                            userManager.updateUser(user.id, name, surname, login, password, role) 
                        else {
                            userManager.addUser(name, surname, login, password, role); 
                            clearAllParams();
                        }
                        
                    }}>
                        {editMode ? <span>Edytuj użytkownika</span> : <span>Dodaj użytkownika</span>}
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}