import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Banner.css';
import img from '../../../images/banner/Professional-image-bg.png';

const Banner = () => {
    return (
        <div className="bg mb-5">
            <Container>
            <Row className="d-flex align-items-center">
                <Col sm={6} className="text-start text-white">
                    <h5>Hello! My Name is</h5>
                    <h1 className="fw-bold">Mohammed Faysal</h1>
                    <p>I am a junior full-stack developer specialized in frontend and MERN stack(backend) for web development. I love coding and I want to passionate on it. I want to know how I may help your project?</p>
                    <NavLink to="/contact">
                    <button className="btn btn-light text-dark fw-bold">Hire me</button>
                    </NavLink>
                </Col>
                <Col sm={6}>
                    <img width="70%" src={img} alt="" />
                </Col>
            </Row>
            </Container>
        </div>
    );
};

export default Banner;