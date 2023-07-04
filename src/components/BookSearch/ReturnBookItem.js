import styles from "../styles/bookItem.module.css";
import { Col, Row, Card } from "react-bootstrap";
import ImageWIthShimmer from "./ImageWithShimmer";

export default function ReturnBookItem({
  book,
  onHide
}) {

  return (
    <>
      <Card
        className={`text-center mt-3 label-color ${styles.card}`}
        style={{ borderRadius: 24 }}
        text="light"
        onClick={onHide}
      >
        <Row>
          <Col md="auto" xs="auto" className={styles.bookImgWrapperCol}>
            <ImageWIthShimmer book={book} styles={styles} />
          </Col>
          <Col>
            <Card.Body className='mt-5'>
              <Card.Title className={`mb-2 ${styles.bookTitle}`}>
                {'"' + book.title + '"'}
              </Card.Title>
              <Card.Title className={`${styles.author} mt-3 font-italic`}>
                {book.authors.replaceAll(";", ", ")}
              </Card.Title>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </>
  );
}
