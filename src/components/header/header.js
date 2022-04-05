import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {Nav, Navbar, Container, Row, Col } from 'react-bootstrap';


export default function Header() {
    return (
        <>
            <Navbar bg="dark" text='secondary'>
                <Container>
                    <a name="top"/>
                    <Col className="brand" md="auto">
                        <Navbar.Brand href="/">
                            <img
                                className="nav-logo"
                                src="summary-stamp.png"
                                width="150"
                                height="100"
                                className="d-inline-block align-top"
                                alt="logo192.png"
                            />
                        </Navbar.Brand>
                    </Col>
                    <Col md={6}/>
                    <Col md="auto">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link className="font-edit" href="/home">Summary</Nav.Link>
                                <Nav.Link className="font-edit" href="/form">Form</Nav.Link>
                                <Nav.Link className="font-edit" href="/quiz">Quiz</Nav.Link>
                                <Nav.Link className="font-edit" href="/login">Log In</Nav.Link>
                                <Nav.Link className="font-edit" href="/registration">Registration</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Col>
                    <Col md={2}/>
                </Container>
            </Navbar>
        </>
);
}
