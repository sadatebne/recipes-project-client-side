import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const Register = () => {

    const formHandle=(event)=>{
        
        event.preventDefault()

        const form=event.target
        const user=form.name.value
        const email= form.email.value
        const password= form.password.value
        const photo=form.photo.value

        console.log(user, email, password)
    }

    return (
        <div>
             <Container className='w-50 mt-5 shadow-lg p-3 mb-5 bg-body-tertiary rounded'>

                <Form onSubmit={formHandle} className='mt-5 p-3'>
                    
                     <h3 className='text-center fs-2'>Register</h3>

                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control type="text" name="name" placeholder="Enter Name" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPhoto">
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control type="text" name="photo" placeholder="Enter Photo URL" required />
                    </Form.Group>

                    <Form.Text className="text-danger">
                        
                    </Form.Text>

                    <Form.Text className="text-success">
                        
                    </Form.Text>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Accept Terms And Condition" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                

                <Form.Text>
                     Have already Account ? Please <Link className="text-danger" to="/login">Login</Link>
                </Form.Text>

            </Container>
        </div>
    );
};

export default Register;