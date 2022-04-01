import React, {Component, useState} from 'react';
import {Row, Col, Container, Button, Card} from "react-bootstrap";

export default function Registration() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [emailError, setEmailError] = useState('Email can not be empty')
    const [passwordError, setPasswordError] = useState('Password can not be empty')

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break

            case 'password':
                setPasswordDirty(true)
                break
        }
    }

    return (
        <>
            <Container>
                <Row xs="auto">
                    <Col md={4}/>
                    <Col md="auto">
                        <Card>
                            <Card.Header as="h5">Registration</Card.Header>
                            <Card.Body>
                                {(emailDirty && emailError) && <div style={{color:'red'}}>{emailError}</div>}
                                <input value={email} onBlur={e => blurHandler(e)} name='email' type="text" placeholder="Enter your email...."/>
                                <br/>
                                {(passwordDirty && passwordError) && <div style={{color:'red'}}>{passwordError}</div>}
                                <input value={password} onBlur={e => blurHandler(e)} name='password' type="password" placeholder="Enter your password...."/>
                                <br/>
                                <Button variant="primary">Registr</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}