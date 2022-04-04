import './welcome.css'
import React, {Component} from 'react';
import {Button, Container, Row} from "react-bootstrap";

export default function Welcome() {
    return (
        <>
            <Container className="Welcome-container">
                <img className="Welcome-img" src="filler.png"/>
                <Button  className="Welcome-btn" variant="secondary" href="/home">Continue</Button>
            </Container>
        </>
    )
}

