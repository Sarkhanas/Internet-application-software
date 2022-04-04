import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
    return (
        <>
            <Container>
                <Row xs="auto">
                    <Col md={3}/>
                    <Col md="auto">
                        <Card bg='dark' text='secondary'>
                            <Card.Header>Quote</Card.Header>
                            <Card.Body>
                                <blockquote className="blockquote mb-0">
                                    <p>
                                        {' '}
                                        Do you think all that simple? Yes, it's simple. But not at all...{' '}
                                    </p>
                                    <footer bg='dark' text='secondary' className="blockquote-footer">
                                        <i>Albert Einstein</i>
                                    </footer>
                                </blockquote>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>);
}