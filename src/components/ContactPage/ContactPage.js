import NavBar from "../UiCommon/NavBar";
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styles from "../styles/contactPage.module.css";
import people from './peopleData';

export default function ContactPage() {
  return (
    <div className="background-color">
      <NavBar />
      <div className={styles.contactPageHeader}>
        <h4>Contact Panel</h4>
      </div>
      <Row className='justify-content-center' style={{ marginTop: '50px' }}>
        {people.map((person) => (
          <Col key={person.email} sm={7}>
            <div
              className="border border-primary p-3 mb-4 d-flex flex-row align-items-center"
              style={{
                borderRadius: '2rem',
                backgroundColor: '#404040',
              }}
            >
              <div style={{ flex: 1 }}>
                <h2>{person.name}</h2>
                <p>Email: <a href={`mailto:${person.email}`}>{person.email}</a></p>
                <p>Phone: <a href={`tel:${person.phone}`}>{person.phone}</a></p>
                <p>
                  LinkedIn: <a href={person.linkedin}>Go to profile</a>
                </p>
                <p>
                  GitHub: <a href={person.github}>Go to profile</a>
                </p>
              </div>
              <div style={{ flex: 1, textAlign: 'right', width: 'auto', height: '200px' }}>
                <img
                  src={process.env.PUBLIC_URL + person.img}
                  alt={person.name}
                  style={{
                    borderRadius: '2rem',
                    width: 'auto',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};
