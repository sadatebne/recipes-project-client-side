import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { getAuth, updateProfile } from 'firebase/auth';
import app from '../../firebase/firebase.config';

const auth = getAuth(app);

const Register = () => {
    const [err, setErr] = useState('')
    const [success, setSuccess] = useState('')

    const navigate=useNavigate()

    const {signUp, logout}=useContext(AuthContext)

    

    const formHandle=(event)=>{
        
        event.preventDefault()

        const form=event.target
        const name=form.name.value
        const email= form.email.value
        const password= form.password.value
        const photo=form.photo.value

        console.log(name, email, password, photo)

        signUp(email, password)
        .then(result=>{
            //console.log(result.user)
            updateUser(result.user, name, photo)
            setSuccess("successfully Register")
            form.reset()
            navigate('/login')
            logout()
        })
        .catch(error=>{
            setErr(error.message)
            console.log(error.message)
        })

        // firebase registration
    }

    const updateUser=(user, name, photo)=>{
        updateProfile(user,{
            displayName : name,
            photoURL: photo,
        })
        .then(() => {
            console.log('user name updated')
            logout()
        })
        .catch(error => {
            setError(error.message);
        })
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
                        {err}
                    </Form.Text>
                      {success}
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