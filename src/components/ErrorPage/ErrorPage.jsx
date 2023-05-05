import React from 'react';
import { Container } from 'react-bootstrap';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    
    const error=useRouteError()

    const styles = {
        width: '200px',
        height: 'auto',
        borderRadius: '50%',
        boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.5)',
      };
      const style2 = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      };
    return (
        <Container>
            <div style={style2}>
                <img style={styles} src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1920.jpg?w=2000" alt="" />
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>

        </Container>

    );
};

export default ErrorPage;