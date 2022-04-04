import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component, useEffect, useState} from 'react';
import {Row, Col, Container, Button, Card} from "react-bootstrap";

export default function Registration() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [emailError, setEmailError] = useState('Email can not be empty')
    const [passwordError, setPasswordError] = useState('Password can not be empty')
    const [formValid, setFormValid] = useState(false)

    useEffect(()=>{
        if(emailError || passwordError){
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [emailError, passwordError])

    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Invalid email')
        } else {
            setEmailError("")
        }
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length < 3 || e.target.value.length >8) {
            setPasswordError('Password must be longer than 3 symbols and shorter than 8 symbols')
            if (!e.target.value) {
                setPasswordError('Password can not be empty')
            }
        } else {
            setPasswordError("")
        }
    }

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
                <Row className="Tab"/>
                <Row xs="auto">
                    <Col md={4}/>
                    <Col md="auto">
                        <Card bg='dark' text='secondary' border='dark'>
                            <Card.Header as="h5">Registration</Card.Header>
                            <Card.Body>
                                {(emailDirty && emailError) && <div style={{color:'red'}}>{emailError}</div>}
                                <input
                                    value={email}
                                    onChange={e => emailHandler(e)}
                                    onBlur={e => blurHandler(e)}
                                    name='email'
                                    type="text"
                                    placeholder="Enter your email...."/>
                                <br/>
                                {(passwordDirty && passwordError) && <div style={{color:'red'}}>{passwordError}</div>}
                                <input
                                    value={password}
                                    onChange={e => passwordHandler(e)}
                                    onBlur={e => blurHandler(e)}
                                    name='password'
                                    type="password"
                                    placeholder="Enter your password...."/>
                                <br/>
                                <Button disabled={!formValid} variant="secondary">Registr</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}