import NavBar from "../UiCommon/NavBar";
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from "../styles/adminPanel.module.css";
import image1 from './341675610_3075286262775926_1037250746371991566_n.jpg';
import image2 from './343108918_1249723069254996_1508725202135451233_n.jpg';
import image3 from './341574772_255036097005315_9170128328932906310_n.jpg';

export default function ContactPage() {
    const people = [
        {
            name: 'Jan Rembikowski',
            email: 'jan.remb@gmail.com',
            phone: '123-456-789',
            linkedin: 'https://www.linkedin.com/in/jan-rembikowski/',
            github: 'https://github.com/joohnnyvv',
            img: image1
        },
        {
            name: 'Arkadiusz Mądry',
            email: 'ark.madr@gmail.com',
            phone: '123-456-789',
            linkedin: 'https://www.linkedin.com/in/arkadiusz-madry/',
            github: 'https://github.com/arix2000',
            img: image2
        },
        {
            name: 'Maciej Kiełducki',
            email: 'mac.kiel@gmail.com',
            phone: '123-456-789',
            linkedin: 'https://www.linkedin.com/in/maciej-kiełducki/',
            github: 'https://github.com/maciekkielducki',
            img: image3
        },
      ];
    
      return (
        <div className="background-color">
            <NavBar/>
            <div className={styles.adminPanelHeader}>
                <h4>Contact Panel</h4>
            </div>
            <Row className='justify-content-center' style={{marginTop:'50px'}}>
            {people.map((person) => (
                <Col key={person.email} sm={7}>
                    <div className="border border-primary p-3 mb-4" style={{ borderRadius: '2rem', backgroundColor:'#404040' }}>
                    <Row>
                        <Col sm={9}>
                            <h2>{person.name}</h2>
                            <p>Email: {person.email}</p>
                            <p>Phone: {person.phone}</p>
                            <p>Linkedin: 
                                <a href={person.linkedin}> Go to profile</a>
                            </p>
                            <p>Github: 
                                <a href={person.github}> Go to profile</a>
                            </p>
                        </Col>
                    <Col sm={3}>
                        <img src={process.env.PUBLIC_URL + person.img} style={{ width: '115%', borderRadius: '2rem', marginTop:'3px', marginLeft:'-40px', maxWidth:'300px' }} />
                    </Col>
                </Row>
                </div>
            </Col>
                ))}
            </Row>
        </div>
    );
};