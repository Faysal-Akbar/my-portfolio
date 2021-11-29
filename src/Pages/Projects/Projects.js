import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import img1 from '../../images/project/p1.png'
import img2 from '../../images/project/p2.png'
import img3 from '../../images/project/p3.png'
import img4 from '../../images/project/p4.png'

const Projects = () => {
    return (
        <div className="mt-5">
            <h2>My Latest Projects</h2>
            <Container className="mt-5">
                <Row>
                    <Col sm={4} className="mb-3">
                    <Card className="h-100 bg-light">
                    <Card.Img variant="top" src={img1} />
                    <Card.Body>
                        <h3>Hero Runner Website</h3>
                        <Card.Text className="text-start">
                        Hero Runner is a MERN stack project. This Project build with React.js, Node.js, MongoDB, Express.js, Firebase, Material UI.
                        User can see the home page and also see all products. If user want to buy any product, at first they have to register in the website.
                        If they was registered, they have to login.
                        </Card.Text>
                        <button className="btn btn-primary">See Details</button>
                    </Card.Body>
                    </Card>
                    </Col>
                    <Col sm={4} className="mb-3">
                    <Card className="h-100 bg-light">
                    <Card.Img variant="top" src={img2} />
                    <Card.Body>
                        <h3>Hero Traveler</h3>
                        <Card.Text className="text-start">
                        Hero Traveler is also a MERN stack project. This Project was built with React.js, Node.js, MongoDB, Express.js, Firebase, React Bootstrap.
                        User can choose there offer for travel in many interesting tourist place.
                        User can book there offer and also update there status, such as pending or approved.
                        </Card.Text>
                        <button className="btn btn-primary">See Details</button>
                    </Card.Body>
                    </Card>
                    </Col>
                    <Col sm={4} className="mb-3">
                    <Card className="h-100 bg-light">
                    <Card.Img variant="top" src={img3} />
                    <Card.Body>
                        <h3>Doctors Hospital</h3>
                        <Card.Text className="text-start">
                        Doctors Hospital is my awesome project. This project build with React.js, React Bootstrap, Firebase Authentication.
                        A well environmental hospital is important for us. Doctor's Hospital one them. Patients will feel comfort with staying this hospital. We always try to best for patients.
                        </Card.Text>
                        <button className="btn btn-primary">See Details</button>
                    </Card.Body>
                    </Card>
                    </Col>
                    <Col sm={4} className="mb-3">
                    <Card className="h-100 bg-light">
                    <Card.Img variant="top" src={img4} />
                    <Card.Body>
                        <h3>Ministry Unity</h3>
                        <Card.Text className="text-start">
                        Ministry Unity is a project which is unite the all president or government for a specific goal. How much budget for there project/goal, this budget will contribute by the all president or government who present in this unity.
                        </Card.Text>
                        <button className="btn btn-primary float-left">See Details</button>
                    </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Projects;