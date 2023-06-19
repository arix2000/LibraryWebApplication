import { Button, Col, Form, Modal, Row } from "react-bootstrap"
import styles from "../styles/homePage/addEditBooksModal.module.css"
import { useState } from "react";

const AddEditBooksDialog = (props) => {

    const isValidUrl = urlString => {
        var urlPattern = new RegExp('^(https?:\\/\\/)?' +
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
            '((\\d{1,3}\\.){3}\\d{1,3}))' +
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
            '(\\?[;&a-z\\d%_.~+=-]*)?' +
            '(\\#[-a-z\\d_]*)?$', 'i');
        return !!urlPattern.test(urlString);
    }

    function getSafeBookParameter(param) {
        if (props.book != null)
            return param();
        else return "";
    }

    function clearAllParams() {
        setTitle("");
        setDescription("");
        setSubtitle("");
        setAuthors("");
        setCategories("");
        setRating(0);
        setImageUrl("");
    }

    function cancelEditChanges() {
        setTitle(getSafeBookParameter(() => props.book.title));
        setDescription(getSafeBookParameter(() => props.book.description));
        setSubtitle(getSafeBookParameter(() => props.book.subtitle));
        setAuthors(getSafeBookParameter(() => props.book.authors));
        setCategories(getSafeBookParameter(() => props.book.categories));
        setRating(getSafeBookParameter(() => props.book.average_rating));
        setImageUrl(getSafeBookParameter(() => props.book.thumbnail));
    }

    function onAcceptClicked(event) {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        if (title != "" && description != "" && authors != "" && categories != "" && rating != "" && isValidUrl(imageUrl)) {
            setValidated(true);
        } else {
            setValidated(true);
            return;
        }
        props.onHide();
        if (editMode) {
            //TODO on edit action
        } else {
            //TODO on add action
            clearAllParams();
        }
        setValidated(false);
    }

    function onCancelClicked() {
        if (!editMode) {
            clearAllParams();
        } else {
            cancelEditChanges();
        }
        setValidated(false);
        props.onHide();
    }

    const editMode = props.book != null;

    const [title, setTitle] = useState(getSafeBookParameter(() => props.book.title))
    const [description, setDescription] = useState(getSafeBookParameter(() => props.book.description))
    const [subtitle, setSubtitle] = useState(getSafeBookParameter(() => props.book.subtitle))
    const [authors, setAuthors] = useState(getSafeBookParameter(() => props.book.authors))
    const [categories, setCategories] = useState(getSafeBookParameter(() => props.book.categories))
    const [rating, setRating] = useState(getSafeBookParameter(() => props.book.average_rating))
    const [imageUrl, setImageUrl] = useState(getSafeBookParameter(() => props.book.thumbnail))
    const [validated, setValidated] = useState(false);

    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <div className={styles.modalContent}>
                    <Modal.Header>
                        <Modal.Title>
                            {editMode ? <span>Edit Book</span> : <span>Add Book</span>}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form noValidate validated={validated}>
                            <Form.Group as={Row}>
                                <Form.Label column>Title: </Form.Label>
                                <Col xs={8} lg={10}>
                                    <Form.Control required defaultValue={title} className="default-text-field"
                                        onChange={(event) => setTitle(event.target.value)} />
                                    <Form.Control.Feedback type="invalid">Title cannot be empty!</Form.Control.Feedback>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className={styles.formMarginTop}>
                                <Form.Label column>Description: </Form.Label>
                                <Col xs={8} lg={10}>
                                    <Form.Control as="textarea" required defaultValue={description} className="default-text-field"
                                        onChange={(event) => setDescription(event.target.value)} />
                                    <Form.Control.Feedback type="invalid">Description cannot be empty!</Form.Control.Feedback>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className={styles.formMarginTop}>
                                <Form.Label column>Subtitle: </Form.Label>
                                <Col xs={8} lg={10}>
                                    <Form.Control defaultValue={subtitle} className="default-text-field"
                                        onChange={(event) => setSubtitle(event.target.value)} />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className={styles.formMarginTop}>
                                <Form.Label column>Authors: </Form.Label>
                                <Col xs={8} lg={10}>
                                    <Form.Control required defaultValue={authors} className="default-text-field"
                                        onChange={(event) => setAuthors(event.target.value)} />
                                    <Form.Control.Feedback type="invalid">Authors cannot be empty!</Form.Control.Feedback>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className={styles.formMarginTop}>
                                <Form.Label column>Categories: </Form.Label>
                                <Col xs={8} lg={10}>
                                    <Form.Control required defaultValue={categories} className="default-text-field"
                                        onChange={(event) => setCategories(event.target.value)} />
                                    <Form.Control.Feedback type="invalid">Categories cannot be empty!</Form.Control.Feedback>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className={styles.formMarginTop}>
                                <Form.Label column>Rating: </Form.Label>
                                <Col xs={8} lg={10}>
                                    <Form.Control type="number" step={".01"} min={0} max={5} required
                                        defaultValue={!rating ? 0 : rating} className="default-text-field"
                                        onChange={(event) => setRating(event.target.value)} />
                                    <Form.Control.Feedback type="invalid">
                                        Rating cannot be empty or out of range 0-5 (two decimal points allowed).
                                    </Form.Control.Feedback>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className={styles.formMarginTop}>
                                <Form.Label column>Image url: </Form.Label>
                                <Col xs={8} lg={10}>
                                    <Form.Control type="url" required defaultValue={imageUrl} className="default-text-field"
                                        onChange={(event) => setImageUrl(event.target.value)} />
                                    <Form.Control.Feedback type="invalid">Image url is not a proper url!</Form.Control.Feedback>
                                    {
                                        <div style={{ textAlign: "center", maxWidth: "100%" }}>
                                            {isValidUrl(imageUrl) ?
                                                <img
                                                    src={imageUrl}
                                                    className={styles.previewImg} />
                                                :
                                                <img
                                                    src="https://placehold.co/327x500/3b3a3a/FFF?text=Preview"
                                                    className={styles.previewImg}
                                                />}
                                        </div>
                                    }
                                </Col>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="button-radius" variant="secondary"
                            onClick={onCancelClicked}>Cancel</Button>
                        <Button className="button-radius" onClick={onAcceptClicked}>
                            {editMode ? <span>Apply changes</span> : <span>Add book</span>}
                        </Button>
                    </Modal.Footer>
                </div>
            </Modal>
        </>
    )
}

export default AddEditBooksDialog;