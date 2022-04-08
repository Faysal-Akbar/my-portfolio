import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter'
import './Banner.css';
import img from '../../../images/banner/portfolio-bg.png';
import img1 from '../../../images/banner/my-img-crp.png'
import Particles from "react-tsparticles";

const Banner = () => {
    const particlesInit = (main) => {
        console.log(main);
      };
    
      const particlesLoaded = (container) => {
        console.log(container);
      };
    return (
        <div>
        <div>
        <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 100,
            enable: false,
            opacity: 0.3,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 100,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "star",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />
        </div>
        <div className="bg mb-5" data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
            <Container>
            <Row className="d-flex align-items-center">
                <Col sm={6} className="text-start text-white mt-3">
                    <div>
                   <h1>
                       Hi! I am Mohammed Faysal
                   </h1>
                   <h4 className="">I am a {
                   <Typewriter
                   words={[ 'MERN Stack Developer',
                   'Web Developer',
                   'Full-Stack Developer',
                   'Front-End Developer']}
                   loop
                   cursor
                   cursorStyle='_'
                   typeSpeed={70}
                   deleteSpeed={50}
                   delaySpeed={1000}
                 />}
                 </h4>
                </div>
                <div>
                <p>I am a junior full-stack developer specialized in frontend and MERN stack(backend) for web development. I love coding and I want to passionate on it. I want to know how I may help your project?</p>
                </div>
                    <NavLink to="/contact">
                    <button className="btn btn-light text-dark fw-bold">Hire me</button>
                    </NavLink>
                </Col>
                <Col sm={6} className="">
                    <img width="80%" src={img1} alt="" />
                </Col>
            </Row>
            </Container>
        </div>
        </div>
    );
};

export default Banner;