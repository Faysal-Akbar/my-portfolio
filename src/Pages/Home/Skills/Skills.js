import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import html from '../../../images/skills/html.png';
import css from '../../../images/skills/css.png';
import js from '../../../images/skills/js.png';
import react from '../../../images/skills/react.png';
import node from '../../../images/skills/node.png';
import bootstrap from '../../../images/skills/bootstrap.png';
import tailwind from '../../../images/skills/tailwind.png';
import Mongodb from '../../../images/skills/mongodb.png';
import firebase from '../../../images/skills/firebase.png';
import mui from '../../../images/skills/mui.png';

const Skills = () => {
    return (
        <Container className="text-start mt-5">
            <h2 style={{color: 'rgb(113, 88, 7)'}}>My Skills</h2><hr />
            <Row className="mt-3 mb-5">
                <Col sm={4}>
                <Card className="mb-3 bg-light">
                    <Card.Img style={{width: '79px', margin: 'auto', marginTop: '6px'}} src={html} />
                    <Card.Body>
                    <Card.Title className="text-center fw-bold">HTML</Card.Title>
                    </Card.Body>
                </Card>
                </Col>
                <Col sm={4}>
                <Card className="bg-light">
                    <Card.Img style={{width: '55px', margin: 'auto', marginTop: '8px'}} src={css} />
                    <Card.Body>
                    <Card.Title className="text-center fw-bold">CSS</Card.Title>
                    </Card.Body>
                </Card>
                </Col>
                <Col sm={4}>
                <Card className="bg-light">
                    <Card.Img style={{width: '136px', margin: 'auto', marginTop: '10px'}} src={js} />
                    <Card.Body>
                    <Card.Title className="text-center fw-bold ms-5">JavaScript</Card.Title>
                    </Card.Body>
                </Card>
                </Col>
                <Col sm={4}>
                <Card className="bg-light">
                    <Card.Img style={{width: '150px', margin: 'auto'}} src={react} />
                    <Card.Body>
                    <Card.Title className="text-center fw-bold">React js</Card.Title>
                    </Card.Body>
                </Card>
                </Col>
                <Col sm={4}>
                <Card className="bg-light">
                    <Card.Img style={{width: '160px', margin: 'auto'}} src={node} />
                    <Card.Body>
                    <Card.Title className="text-center fw-bold">Node js</Card.Title>
                    </Card.Body>
                </Card>
                </Col>
                <Col sm={4}>
                <Card className="mb-3 bg-light">
                    <Card.Img style={{width: '130px', margin: 'auto'}} src={bootstrap} />
                    <Card.Body>
                    <Card.Title className="text-center fw-bold">Bootstrap</Card.Title>
                    </Card.Body>
                </Card>
                </Col>
                <Col sm={4}>
                <Card className="mb-3 bg-light">
                    <Card.Img style={{width: '85px', margin: 'auto'}} src={tailwind} />
                    <Card.Body>
                    <Card.Title className="text-center fw-bold">Tailwind</Card.Title>
                    </Card.Body>
                </Card>
                </Col>
                <Col sm={4}>
                <Card className="bg-light">
                    <Card.Img style={{width: '132px', margin: 'auto'}} src={Mongodb} />
                    <Card.Body>
                    <Card.Title className="text-center fw-bold">MongoDB</Card.Title>
                    </Card.Body>
                </Card>
                </Col>
                <Col sm={4}>
                <Card className="bg-light">
                    <Card.Img style={{width: '110px', margin: 'auto'}} src={firebase} />
                    <Card.Body>
                    <Card.Title className="text-center fw-bold">Firebase</Card.Title>
                    </Card.Body>
                </Card>
                </Col>
                <Col sm={4}>
                <Card className="bg-light">
                    <Card.Img style={{width: '90px', margin: 'auto'}} src={mui} />
                    <Card.Body>
                    <Card.Title className="text-center fw-bold">Material UI</Card.Title>
                    </Card.Body>
                </Card>
                </Col>
                
            </Row>
        </Container>
    );
};

export default Skills;