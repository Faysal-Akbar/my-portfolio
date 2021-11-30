import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Header from '../Home/Header/Header';
import img from '../../images/banner/Professional-image-bg.png';
import TextAnimation from 'react-animate-text';

const AboutMe = () => {
    return (
        <div>
            <Header></Header>
            <Container className="mt-5 mb-5">
            <Row className="d-flex align-items-center text-start">
                <Col sm={6}>
                    <img className="rounded-circle" width="400px" src={img} alt="" />
                </Col>
                <Col sm={6}>
                <TextAnimation>
                <h2 className="mb-5 mt-3">You're excited to know who I am?</h2>
                </TextAnimation>
                    <h6>I am a student of BGC Trust University Bangladesh. My home town is Cox’s Bazar, but at present I live in Chattagram city. Recently I finished “complete web development course with jhankar mahbub”, who’s CEO is Mr. Jhankar Mahbub. Alhamdulillah, now I am a junior full-stack web developer through this course.</h6>
                    <h6>Already I finished two full-stack projects. Overall I finished 10+ different projects. I expert in React.js, JavaScript, Node.js, Express.js, MongoDB(CRUD operation), HTML, CSS, Bootstrap, Tailwind CSS, Material UI, Rest API, Browser API, Chrome Dev tool, React Router v5 & v6, Firebase, Heroku, Netlify.</h6>
                    <h6>I want to set my career on web development. Becoming a successful web developer is my hobby. I also work on it. Pray for me and support me so that I can achieve my goal.</h6>
                </Col>
            </Row>
            </Container>
        </div>
    );
};

export default AboutMe;