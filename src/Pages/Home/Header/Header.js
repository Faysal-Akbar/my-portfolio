import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
        <Navbar collapseOnSelect expand="lg" bg="light">
            <Container className="d-flex justify-content-between">
                    <div>
                    <Navbar.Brand href="#home" className="fw-bold">MF</Navbar.Brand>
                    <a href="https://github.com/Faysal-Akbar" target="_blank" rel="noreferrer noopener github">
                    <i className="fab fa-github-alt text-dark me-3 fa-lg"></i></a>
                    <a href="https://www.linkedin.com/in/mohammed-faysal-414b8b1a0/" target="_blank" rel="noreferrer noopener linkedin">
                    <i className="fab fa-linkedin-in text-dark me-3 fa-lg"></i></a>
                    <a href="https://stackoverflow.com/users/16841463/mohammed-faysal" target="_blank" rel="noreferrer noopener stackOverflow">
                    <i className="fab fa-stack-overflow text-dark fa-lg"></i></a>
                    </div>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    <Nav>
                    <Link to="/home" className="text-decoration-none text-dark mt-2 me-4">
                        Home
                    </Link>
                    <Nav.Link className="text-dark me-4" href="https://drive.google.com/file/d/11SKwfdFQIUE9ufRUsU83qaQF5BlL-1NO/view?usp=sharing" target="_blank" rel="noreferrer noopener resume">Download Resume</Nav.Link>
                    <Link to="/about" className="text-decoration-none text-dark mt-2 me-4">
                        About me
                    </Link>
                    <Link to="/contact" className="text-decoration-none text-dark mt-2 me-4">
                        Contact me
                    </Link>
                    <Link to="/blogs" className="text-decoration-none text-dark mt-2">
                        My Blogs
                    </Link>
                    
                    </Nav>
                    </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    );
};

export default Header;