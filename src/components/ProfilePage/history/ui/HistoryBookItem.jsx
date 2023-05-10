import styles from "../../../styles/userHistory.module.css";
import { Col, Row, Card, Container, Button } from "react-bootstrap";
import { Rating } from "@mui/material";
import React, { useState } from "react";
import { MdNavigateNext } from "react-icons/md";

const HistoryBookItem = ({ book, setDetailShow }) => {

  const [imgObjectFitStyle, setImgObjectFitStyle] = useState(styles.cardImgFitContain);

  const onSeeDetailsClicked = (e) => {
    e.stopPropagation()
    setDetailShow(book);
  }

  return (
    <>
      <Card
        className={`text-center ${styles.historyBookCard}`}
        text="light"
      >
        <Row >
          <Col md='auto' xs='auto'>
            {book.thumbnail.length != 0 ? <img
              className={`${styles.historyBookItemImage} ${imgObjectFitStyle}`}
              src={book.thumbnail}
              onLoad={(img) => {
                if (img.currentTarget.clientWidth == 180) {
                  setImgObjectFitStyle(styles.cardImgFitFill);
                }
              }}
            /> : <img styles={styles.historyBookItemImage} style={{ width: '167px' }}
              src="https://linda-hoang.com/wp-content/uploads/2014/10/img-placeholder-dark-vertical.jpg" />}
          </Col>
          <Col style={{ paddingLeft: "0px", paddingRight: "30px" }}>
            <Card.Body className={styles.historyBookItemBody}>
              <div className={styles.historyBookDescription}>{book.description}</div>
              <Rating
                name="half-rating-read"
                defaultValue={book.average_rating}
                precision={0.1}
                readOnly
              />
              <div>
                <Button className={styles.historyBookDetailsButton} onClick={(e) => onSeeDetailsClicked(e)}>See more details <MdNavigateNext size="22px"/></Button>
              </div>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </>
  );
}

export default HistoryBookItem;