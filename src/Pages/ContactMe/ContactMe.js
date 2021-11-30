import React from 'react';
import { Form } from 'react-bootstrap';
import Header from '../Home/Header/Header';
import emailjs from 'emailjs-com';
import TextAnimation from 'react-animate-text';

const ContactMe = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_33y8rpx', 'template_3lk1f3d', e.target, 'user_jojqKXqklBmuWBJUeaqNw')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
    }
    return (
        <div>
            <Header></Header>
            <TextAnimation>
            <h2 className="mt-5 mb-5">Get In Touch</h2>
            </TextAnimation>

            <Form  onSubmit={handleSubmit} className="w-50 mx-auto bg-secondary p-5">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control required type="text" name="name" placeholder="Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                    <Form.Control required type="email" name="email" placeholder="Your Email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" name="message" placeholder="Enter Your Message" rows={3} />
                </Form.Group>
                <button className="btn btn-success">Submit</button>
            </Form>
        </div>
    );
};

export default ContactMe;