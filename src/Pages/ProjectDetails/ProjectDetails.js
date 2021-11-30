import React, { useEffect, useState } from 'react';
import { Card, Carousel, Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import Header from '../Home/Header/Header';

const ProjectDetails = () => {
    const {id} = useParams();
    const [details, setDetails] = useState([]);

    useEffect(()=> {
        fetch('/projects.json')
        .then(res => res.json())
        .then(data => setDetails(data))
    }, [id])

    const project = details.find(detail => detail?.id == id);
    return (
        <>
        <Header></Header>
        <Container>
            <h2 className="text-start mt-5 text-danger"><i className="fas fa-laptop"></i> {project?.name}</h2>
            <hr className="mb-5"></hr>
            <h3 className="text-start text-danger w-75 mx-auto">Website Screenshots</h3>
            <Carousel className="mb-5 w-75 mx-auto" variant="dark">
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={project?.img1}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={project?.img2}
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={project?.img3}
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={project?.img4}
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={project?.img5}
                alt="Third slide"
                />
            </Carousel.Item>
            </Carousel>
            <h3 className="mb-3 text-start w-75 mx-auto text-danger">Usage & Features</h3>
            <div className="row">
                <div className="col">
                <Card className="text-start w-75 mx-auto mb-5 bg-light p-5">
                    <Card.Body>
                        <Card.Text>
                        1. {project?.des1}
                        </Card.Text>
                        <Card.Text>
                        2. {project?.des2}
                        </Card.Text>
                        <Card.Text>
                        3. {project?.des3}
                        </Card.Text>
                        <Card.Text>
                        4. {project?.des4}
                        </Card.Text>
                        <Card.Text>
                        5. {project?.des5}
                        </Card.Text> 
                        <Card.Text>
                        6. {project?.des6}
                        </Card.Text>
                        <button className="btn btn-outline-success me-2">
                            <a style={{textDecoration: 'none', color: 'black'}} href={project?.live} target="_blank" rel="noreferrer noopener live">Live site</a>
                        </button>
                        <button className="btn btn-outline-danger me-2">
                            <a style={{textDecoration: 'none', color: 'black'}} href={project?.client} target="_blank" rel="noreferrer noopener live">Client Side Code</a>
                        </button>
                        <button className="btn btn-outline-danger">
                            <a style={{textDecoration: 'none', color: 'black'}} href={project?.server} target="_blank" rel="noreferrer noopener live">Server Side Code</a>
                        </button>
                    </Card.Body>
                </Card>
                </div>
            </div>
        </Container>
        </>
    );
};

export default ProjectDetails;