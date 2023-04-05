import { BsTrashFill } from "react-icons/bs";
import { RiEditFill } from "react-icons/ri";
import { Button, Card, Col, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import PasswordText from "./PasswordText";
import DeleteUserDialog from "./dialogs/DeleteUserDialog";
import { useState } from "react";
import AddEditUserDialog from "./dialogs/AddEditUserDialog";
import translateRole from "./utils/RoleTranslate";

const UserListItem = ({ user, styles }) => {
  const [modalDeleteShow, setModalDeleteShow] = useState(false);
  const [modalEditShow, setModalEditShow] = useState(false);
  return (
    <>
      <div>
        <Card border="primary" className={`${styles.userListItemBody} ${styles.card}`}>
          <Row>
            <Col sm={8} xs={8}><Card.Title className="text-truncate">{user.name} {user.surname}</Card.Title></Col>
            <Col>
              <Card.Subtitle className="text-right" style={{ margin: 5 }}><b>{translateRole(user.role)}</b></Card.Subtitle>
            </Col>
          </Row>

          <Card.Text>
            <Row>
              <Col className="text-truncate">
                Login: {user.login}<br />
                Hasło: <PasswordText pass={user.password} /><br />
                Zarezerwowane: {user.reserved_books.length}<br />
                Wypożyczone: {user.borrowed_books.length}
              </Col>
            </Row>
          </Card.Text>
          <Card.Footer>
            <Row>
              <Col>
                {user.login == "root"
                  ? <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Nie można edytować root'a</Tooltip>}>
                    <span className="d-inline-block">
                      <Button disabled variant="secondary" className={styles.defaultButtonRadius} onClick={() => setModalEditShow(true)}>
                        Edytuj <RiEditFill style={{ marginLeft: 4, marginBottom: 4 }} />
                      </Button>
                    </span>
                  </OverlayTrigger>
                  : <Button className={styles.defaultButtonRadius} onClick={() => setModalEditShow(true)}>
                    Edytuj <RiEditFill style={{ marginLeft: 4, marginBottom: 4 }} />
                  </Button>
                }
              </Col>
              <Col className="text-right">
                {user.role == "admin"
                  ? <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Nie można usunąć admina</Tooltip>}>
                    <span className="d-inline-block">
                      <Button className="disabled" variant="secondary" style={{ borderRadius: 12 }}>
                        <BsTrashFill />
                      </Button>
                    </span>
                  </OverlayTrigger>
                  : <Button className={styles.defaultButtonRadius} variant="danger" onClick={() => setModalDeleteShow(true)}><BsTrashFill /></Button>
                }
              </Col>
            </Row>
          </Card.Footer>
        </Card>
      </div>

      <DeleteUserDialog
        show={modalDeleteShow}
        onHide={() => setModalDeleteShow(false)}
        user={user}
      />
      <AddEditUserDialog
        show={modalEditShow}
        onHide={() => setModalEditShow(false)}
        user={user}
      />
    </>
  )
}
