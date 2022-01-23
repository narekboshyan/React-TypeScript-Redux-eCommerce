import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <Link to="/">
                        <Navbar.Brand>Buy & Enjoy</Navbar.Brand>
                    </Link>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="custom">
                        <Nav className="ml-auto">
                            <Nav.Link as={Link} to="/cart">
                                <i className="fas fa-shopping-cart"></i> Cart
                            </Nav.Link>
                            <Nav.Link as={Link} to="/login">
                                <i className="fas fa-user"></i> Sign In
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
