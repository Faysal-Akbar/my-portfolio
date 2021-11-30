import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Project from './Project/Project';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(()=> {
        fetch('./projects.json')
        .then(res => res.json())
        .then(data => setProjects(data))
    }, [])
    return (
        <div className="mt-5">
            <Container className="mt-5 text-start">
            <h2 style={{color: 'rgb(113, 88, 7)'}}>My Latest Projects</h2> <hr />
                <Row>
                    {
                        projects.map(project => <Project
                            key={project.id}
                            project = {project}
                        ></Project>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Projects;