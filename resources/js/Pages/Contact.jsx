import {useEffect, useState} from "react";
import React, {useRef} from 'react';
import {Container, Row, Col} from "react-bootstrap";
import contactImg from "../../assets/img/contact-img.svg";
import TrackVisibility from 'react-on-screen';
import emailjs from "@emailjs/browser";

export const Contact = () => {
    const formInitialDetails = {
        user_name: '',
        last_name: '',
        user_email: '',
        phone: '',
        message: ''
    }
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    useEffect(() => emailjs.init("sZtoDVKcdOx0Q-ksX"), []);

    const form = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const serviceId = "service_ulrki3m";
        const templateId = "template_do3j4ii";
        setButtonText("Sending...");


        emailjs
            .sendForm(serviceId, templateId, form.current, {
                publicKey: 'sZtoDVKcdOx0Q-ksX',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );


        setButtonText("Send");
        console.log(formDetails);
        setFormDetails(formInitialDetails);
    };


    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} md={6}>
                        <TrackVisibility>
                            {({isVisible}) =>
                                <img className="animate__animated" src={contactImg}
                                     alt="Contact Us"/>
                            }
                        </TrackVisibility>
                    </Col>
                    <Col size={12} md={6}>
                        <TrackVisibility>
                            {({isVisible}) =>
                                <div className="animate__animated">
                                    <h2>Get In Touch</h2>
                                    <form ref={form} onSubmit={handleSubmit}>
                                        <Row>
                                            <Col size={12} sm={6} className="px-1">
                                                <input type="text" value={formDetails.user_name}
                                                       name="user_name"
                                                       placeholder="First Name"
                                                       onChange={(e) => onFormUpdate('user_name', e.target.value)}/>
                                            </Col>
                                            <Col size={12} sm={6} className="px-1">
                                                <input type="text"
                                                       name="last_name"
                                                       value={formDetails.last_name} placeholder="Last Name"
                                                       onChange={(e) => onFormUpdate('last_name', e.target.value)}/>
                                            </Col>
                                            <Col size={12} sm={6} className="px-1">
                                                <input type="email"
                                                       name="user_email"
                                                       value={formDetails.email}
                                                       placeholder="Email Address"
                                                       onChange={(e) => onFormUpdate('email', e.target.value)}/>
                                            </Col>
                                            <Col size={12} sm={6} className="px-1">
                                                <input type="tel"
                                                       name="phone"
                                                       value={formDetails.phone} placeholder="Phone No."
                                                       onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                                            </Col>
                                            <Col size={12} className="px-1">
                                                <textarea rows="6"
                                                          name="message"
                                                          value={formDetails.message} placeholder="Message"
                                                          onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                                                <button type="submit"><span>{buttonText}</span></button>
                                            </Col>
                                            {
                                                status.message &&
                                                <Col>
                                                    <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                                </Col>
                                            }
                                        </Row>
                                    </form>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
