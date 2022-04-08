import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Project = ({project}) => {
    const {id, name, des1, img1} = project;

    return (
        <Col sm={4} className="mb-3">
            <Card className="h-100 bg-light">
            <Card.Img variant="top" data-aos="zoom-in"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000" src={img1} />
            <Card.Body data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2500">
                <h3 className="my-3">{name}</h3>
            <Card.Text className="text-start">
                {des1}  
            </Card.Text>
            <NavLink to={`/details/${id}`} style={{textDecoration: 'none', color: 'rgb(113, 88, 7)'}}>
            <h6 className="text-start">Click for details <i className="fas fa-info-circle"></i></h6>
            </NavLink>
            </Card.Body>
            </Card>
        </Col>
    );
};

export default Project;