import React from 'react';
import Header from '../shared/Header/Header';
import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Footer from '../shared/Footer/Footer';

const Main = () => {
    return (
        <Container>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </Container>
    );
};

export default Main;