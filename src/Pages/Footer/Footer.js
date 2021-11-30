import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div style={{backgroundColor: 'rgb(113, 88, 7)'}}>
            <Container>
                <Row className="py-2 text-start d-flex align-items-center">
                    <Col xs={12} md={4} className="mb-2">
                        <h2 className="text-light">MF</h2>
                        <a href="https://github.com/Faysal-Akbar" target="_blank" rel="noreferrer noopener github">
                    <i className="fab fa-github-alt text-light bg-secondary p-2 rounded-circle me-3 fa-lg"></i></a>
                    <a href="https://www.linkedin.com/in/mohammed-faysal-414b8b1a0/" target="_blank" rel="noreferrer noopener linkedin">
                    <i className="fab fa-linkedin-in text-light bg-secondary p-2 rounded-circle me-3 fa-lg"></i></a>
                    <a href="https://stackoverflow.com/users/16841463/mohammed-faysal" target="_blank" rel="noreferrer noopener stackOverflow">
                    <i className="fab fa-stack-overflow text-light bg-secondary p-2 rounded-circle fa-lg"></i></a>
                    </Col>
                    <Col xs={12} md={4} className="text-light"><i className="far fa-copyright"></i> 1021 MF | All Rights Reserves.</Col>
                    <Col xs={12} md={4} className="text-light">Developed by: <span className="text-warning fw-bold">MOHAMMED FAYSAL</span></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;