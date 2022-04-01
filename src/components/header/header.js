import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {Nav, Navbar, Container, Row, Col } from 'react-bootstrap';


export default function Header() {
    return (
        <>
            <Navbar bg="white">
                <Container>
                    <Col md="auto">
                        <Navbar.Brand href="/">
                            <img
                                src="summary-stamp.png"
                                width="150"
                                height="100"
                                className="d-inline-block align-top"
                                alt="logo192.png"
                            />
                        </Navbar.Brand>
                    </Col>
                    <Col md={4}/>
                    <Col md="auto">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/">Summary</Nav.Link>
                                <Nav.Link href="/form">Form</Nav.Link>
                                <Nav.Link href="/quiz">Quiz</Nav.Link>
                                <Nav.Link href="/login">Log In</Nav.Link>
                                <Nav.Link href="/registration">Registration</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Col>
                </Container>
            </Navbar>
        </>
);
}
