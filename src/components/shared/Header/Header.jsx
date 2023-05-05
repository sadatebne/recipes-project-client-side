import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPepperHot } from '@fortawesome/free-solid-svg-icons'
import Banner from '../../Banner/Banner';
import { Button, Image } from 'react-bootstrap';
import { AuthContext } from '../../../providers/AuthProvider';
import { toast } from 'react-toastify';


const Header = () => {

    const { user, logout } = useContext(AuthContext)
    //console.log(user)

        //logout
    
        const handleLogout=()=>{
            logout()
            .then(result=>{
             toast("successfully logout")
            })
            .catch(error=>{
              setErr(error.message)
            })
          }

    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/" className='fs-2'>REC<FontAwesomeIcon icon={faPepperHot} bounce size="lg" style={{ color: "#f00000", }} />PE$ </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="#pricing">Blog</Nav.Link>

                        </Nav>
                        <Nav>
                            {
                                user ? <>
                                    <Image style={{ height: '50px', width: '50px' }} src={user.photoURL} roundedCircle />

                                    <Nav.Link eventKey={2} href="/login">
                                        <Button onClick={handleLogout} variant="outline-secondary">Logout</Button>
                                    </Nav.Link>
                                </> : 
                                <Nav.Link eventKey={2} href="/login">
                                    <Button variant="outline-secondary">Login</Button>
                                </Nav.Link>

                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </Container>
    );
};

export default Header;


{/* <img style={{height:'50px', width:'50px'}} src={user.photoURL} alt="" /> */ }