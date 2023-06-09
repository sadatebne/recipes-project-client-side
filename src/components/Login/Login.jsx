import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { toast } from 'react-toastify';


const Login = () => {
    const [err, setErr] = useState('')
    const [success, setSuccess] = useState('')

    //navigate hook
    const navigate = useNavigate()

    // location Hook

    const location = useLocation()

    const from = location.state?.from?.pathname || "/";

    const { logIn, googleLogin, gitHubLogin } = useContext(AuthContext)

    const handleSign = (event) => {
        event.preventDefault()

        const form = event.target
        const email = form.email.value
        const password = form.password.value

        console.log(email, password)

        setErr('')

        logIn(email, password)
            .then(result => {
                console.log(result.user)
                toast("Successfully Login");
                setErr('')
                navigate(from, { replace: true })

            })
            .catch(error => {
                console.log(error)
                setErr(error.message)
            })
    }

    const handleGoogle = () => {
        googleLogin()
            .then(result => {
                console.log(result.user)
                toast("Successfully Login");
                setErr('')
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error)
                setErr(error.message)
            })
        
    }
       
    // Github...
    const handleGithub = () => {
        gitHubLogin()
            .then(result => {
                console.log(result.user)
                toast("Successfully Login");
                setErr('')
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error)
                setErr(error.message)
            })
    }

    return (
        <div>
            <Container className='w-50 mt-5 shadow-lg p-3 mb-5 bg-body-tertiary rounded'>
                <Form onSubmit={handleSign} className='mt-5 p-3'>
                    <h3 className='text-center fs-2'>Login In</h3>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" required />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" required />
                    </Form.Group>

                    <Form.Text className="text-danger">
                        {err}
                    </Form.Text>

                    <Form.Text className="text-success">

                    </Form.Text>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Show Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>

                <div className='text-center mb-2'>
                    <Button onClick={handleGoogle} className='me-2' variant="outline-primary">  Login With Google</Button>
                    <Button onClick={handleGithub} variant="outline-success"> Login With GitHub</Button>
                </div>

                <Form.Text>
                    Don't Have a Account <Link className="text-danger" to="/register">Register</Link>
                </Form.Text>

            </Container>
        </div>
    );
};

export default Login;