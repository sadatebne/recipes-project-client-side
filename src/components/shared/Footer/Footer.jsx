import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPepperHot } from '@fortawesome/free-solid-svg-icons'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <Container style={{backgroundImage:`url('https://img.freepik.com/free-vector/modern-flowing-blue-wave-banner-background_1035-19862.jpg?w=826&t=st=1683279689~exp=1683280289~hmac=1191200f4e0d9dcd5a4836fefae9405fb39c2c08872e2782b838ffa53719188c')`, backgroundSize:'cover'}} className='mt-5 text-center p-3 fw-semibold'>
            <Row>
                <Col lg={4}>
                    <h1 className='text-success'>REC<FontAwesomeIcon icon={faPepperHot} bounce size="lg" style={{ color: "#f00000", }} />PE$</h1>
                    <small>A recipe website is a platform that offers users access to a diverse collection of recipes and cooking tips to help them create delicious meals.</small>
                </Col>
                <Col lg={4}>
                    <h3>About us</h3>
                    <p>Work</p>
                    <p>Latest News</p>
                    <p>Careers</p>
                </Col>
                <Col lg={4}>
                    <h3>Contact Us</h3>
                    <p>Dhaka,Bangladesh</p>
                    <p>+880-000-1234567</p>
                </Col>
            </Row>
            <p className='fw-bolder fst-italic mt-5'>Thanks for visiting our recipe website! Discover delicious recipes and cooking tips to help you create amazing meals for your family and friends. Don't forget to sign up for our newsletter to stay up-to-date on our latest recipes and cooking hacks.</p>
            <div className='d-flex justify-content-center gap-3 fs-3 text-primary'>
                <p><FaFacebook></FaFacebook></p>
                <p><FaInstagram></FaInstagram></p>
                <p><FaTwitter></FaTwitter></p>
            </div>
            <p className='text-center'>
                <small>copyright of website &copy; 2023 </small>
            </p>

        </Container>
    );
};

export default Footer;