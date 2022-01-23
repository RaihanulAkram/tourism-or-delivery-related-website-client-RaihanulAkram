import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';

const MenuBar = () => {

    const { user, logout } = useAuth();

    return (
        <div>
            <Navbar className="navbar navbar-expand-lg" bg="dark" expand="lg">
                <Container fluid>
                    <Navbar.Brand className="text-white">TravelX</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >

                            <NavLink className="link text-white px-2 text-center" to="/home">Home</NavLink>

                            <NavLink className="link text-white px-2 text-center" to="/tours">Tours</NavLink>

                            {user?.email && <NavLink className="link text-white px-2 text-center" to="/addTours">Add Tours</NavLink>}

                            {user?.email && <NavLink className="link text-white px-2 text-center" to="/myorders">My Orders</NavLink>}

                            {user?.email && <NavLink className="link text-white px-2 text-center" to="/manageallorders">Manage All Orders</NavLink>}

                            {!user?.email &&
                                <NavLink className="link text-white px-2 text-center" to="/login">Login</NavLink>
                            }

                            {!user?.email && <NavLink className="link text-white px-2 text-center" to="/register">Register</NavLink>}
                            {
                                <span className="text-white px-2 fw-bold text-center">{user.displayName}</span>
                            }
                            {
                                user?.email &&
                                <NavLink onClick={logout} className="link text-white px-2 text-center" to="/login">Logout</NavLink>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default MenuBar;