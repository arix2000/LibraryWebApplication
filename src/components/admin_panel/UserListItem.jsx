import { BsTrashFill } from "react-icons/bs";
import { RiEditFill } from "react-icons/ri";
import {
  Button,
  Card,
  Col,
  OverlayTrigger,
  Row,
  Tooltip,
} from "react-bootstrap";
import "../styles/admin-panel-styles.css";
import PasswordText from "./PasswordText";
import DeleteUserDialog from "./dialogs/DeleteUserDialog";
import { useState } from "react";
import AddEditUserDialog from "./dialogs/AddEditUserDialog";

const UserListItem = ({ user }) => {
  const [modalDeleteShow, setModalDeleteShow] = useState(false);
  const [modalEditShow, setModalEditShow] = useState(false);
  return (
    <>
      <div>
        <Card
          border="primary"
          className="list-item-body text-light label-color"
        >
          <Row>
            <Col sm={8} xs={8}>
              <Card.Title className="text-truncate">
                {user.name} {user.surname}
              </Card.Title>
            </Col>
            <Col>
              <Card.Subtitle className="text-right" style={{ margin: 5 }}>
                <b>{user.role}</b>
              </Card.Subtitle>
            </Col>
          </Row>

          <Card.Text>
            <Row>
              <Col className="text-truncate">
                Login: {user.login}
                <br />
                Password: <PasswordText pass={user.password} />
                <br />
                Booked: {user.reserved_books.length}
                <br />
                Borrowed: {user.borrowed_books.length}
              </Col>
            </Row>
          </Card.Text>
          <Card.Footer>
            <Row>
              <Col>
                {user.login == "root" ? (
                  <OverlayTrigger
                    overlay={
                      <Tooltip id="tooltip-disabled">
                        You cannot edit root!
                      </Tooltip>
                    }
                  >
                    <span className="d-inline-block">
                      <Button
                        disabled
                        variant="secondary"
                        className="default-button-radius"
                        onClick={() => setModalEditShow(true)}
                      >
                        Edit{" "}
                        <RiEditFill
                          style={{ marginLeft: 4, marginBottom: 4 }}
                        />
                      </Button>
                    </span>
                  </OverlayTrigger>
                ) : (
                  <Button
                    className="default-button-radius"
                    onClick={() => setModalEditShow(true)}
                  >
                    Edit{" "}
                    <RiEditFill style={{ marginLeft: 4, marginBottom: 4 }} />
                  </Button>
                )}
              </Col>
              <Col className="text-right">
                {user.role == "admin" ? (
                  <OverlayTrigger
                    overlay={
                      <Tooltip id="tooltip-disabled">
                        You cannot delete admin
                      </Tooltip>
                    }
                  >
                    <span className="d-inline-block">
                      <Button
                        className="disabled"
                        variant="secondary"
                        style={{ borderRadius: 12 }}
                      >
                        <BsTrashFill />
                      </Button>
                    </span>
                  </OverlayTrigger>
                ) : (
                  <Button
                    className="default-button-radius"
                    variant="danger"
                    onClick={() => setModalDeleteShow(true)}
                  >
                    <BsTrashFill />
                  </Button>
                )}
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
  );
};

export default UserListItem;
