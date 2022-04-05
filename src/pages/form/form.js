import React, {Component} from "react";
import {Col, Container, Row} from "react-bootstrap";
import './form.css';

export default function Form() {
    return(
        <>
            <Container fluid="md">
                <Row xs="auto">
                    <a className="main-font" name="Теги текста">Теги текста</a>
                </Row>
                <Row xs="auto">
                    <Col md="auto">
                        <a name="Заголовки"/>
                        <h1>H1</h1>
                        <h2>H2</h2>
                        <h3>H3</h3>
                        <h4>H4</h4>
                        <h5>H5</h5>
                        <h6>H6</h6>
                    </Col>
                    <Col md="auto">
                        <a name="Форматирование текста"/>
                        <b>B</b>
                        <br/>
                        <em>EM</em>
                        <br/>
                        <i>I</i>
                        <br/>
                        <small>SMALL</small>
                        <br/>
                        <strong>STRONG</strong>
                        <br/>
                        <sub>SUB</sub>
                        <br/>
                        <sup>SUP</sup>
                        <br/>
                        <ins>INS</ins>
                        <br/>
                        <del>DEL</del>
                        <br/>
                        <mark className="Form-mark">MARK</mark>
                    </Col>
                    <Col md="auto">
                        <a name="Ввод компьютерного текста"/>
                        <code>CODE</code>
                        <br/>
                        <kbd>KBD</kbd>
                        <br/>
                        <samp>SAMP</samp>
                        <br/>
                        <var>VAR</var>
                        <br/>
                        <pre>PRE</pre>
                    </Col>
                    <Col md="auto">
                        <a name="Оформление цитат"/>
                        <abbr>ABBR</abbr>
                        <br/>
                        <bdo>BDO</bdo>
                        <br/>
                        <blockquote>BLOCKQOUTE</blockquote>
                        <br/>
                        <q>Q</q>
                        <br/>
                        <cite>CITE</cite>
                        <br/>
                        <dfn>DFN</dfn>
                    </Col>
                    <Col md="auto">
                        <a name="Абзацы"/>
                        P
                        <p>P</p>
                        <br/>
                        BR
                        <br/>BR
                        <br/>
                        HR
                        <hr/>HR
                    </Col>
                </Row>
                <Row className="main-font" xs="auto"><a name="Формы">Формы</a></Row>
                <Row>

                </Row>
            </Container>
        </>
    )
}