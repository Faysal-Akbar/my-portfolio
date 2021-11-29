import React from 'react';
import { Form } from 'react-bootstrap';
import Header from '../Home/Header/Header';
import emailjs from 'emailjs-com';

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
            <h1 className="mt-5 mb-5">Get In Touch</h1>

            <Form  onSubmit={handleSubmit} className="w-50 mx-auto">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="name" name="name" placeholder="Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" name="message" placeholder="Enter Your Message" rows={3} />
                </Form.Group>
                <button className="btn btn-outline-primary">Submit</button>
            </Form>
        </div>
    );
};

export default ContactMe;