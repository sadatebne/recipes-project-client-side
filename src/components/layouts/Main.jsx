import React from 'react';
import Header from '../shared/Header/Header';
import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const Main = () => {
    return (
        <Container>
            <Header></Header>
            <Outlet></Outlet>
        </Container>
    );
};

export default Main;