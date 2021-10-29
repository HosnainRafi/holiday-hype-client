import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import logo from '../../images/logo3.jpg'
import ManageOrder from '../ManageAllOrder/ManageOrder';

const Header = () => {
    const {user,logOut} = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand href="/home"><img src={logo} alt="" width="80px"/>Travel-Hype</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About US</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact US</Nav.Link>
                        {user?.email ?
                            <div className="d-flex flex-row">
                                <Nav.Link as={Link} to="/myOrders">My Orders</Nav.Link>
                                <Nav.Link as={Link} to="/manageOrder">Manage Orders</Nav.Link>
                                <Nav.Link as={Link} to="/addService">Add Service</Nav.Link>
                                <button className="btn btn-danger" onClick={logOut}>Logout</button>
                            </div>
                            :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }
                        <Navbar.Text>
                            Signed in as: <img src={user?.photoURL} width="50px" className="img-fluid" style={{borderRadius:"50%"}} alt="" /> { user?.displayName}
                        </Navbar.Text>
                        
                    </Navbar.Collapse>
                    
                </Container>
            </Navbar>
        </>
    );
};

export default Header;