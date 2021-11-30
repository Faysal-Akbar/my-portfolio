import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Project = ({project}) => {
    const {id, name, des1, img1} = project;

    return (
        <Col sm={4} className="mb-3">
            <Card className="h-100 bg-light">
            <Card.Img variant="top" src={img1} />
            <Card.Body>
                <h3 className="my-3">{name}</h3>
            <Card.Text className="text-start">
                {des1}  
            </Card.Text>
            <NavLink to={`/details/${id}`} style={{textDecoration: 'none', color: 'rgb(113, 88, 7)'}}>
            <h6 className="text-start">Click for details <i className="fas fa-external-link-alt"></i></h6>
            </NavLink>
            </Card.Body>
            </Card>
        </Col>
    );
};

export default Project;