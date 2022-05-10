import React from 'react'
import './about.css'
import portrait from './portrait.png'
import { Container, Row, Col } from 'react-bootstrap';

function About() {
    return (
        <div className="header">
            <Container>
                <Row>
                    <Col className="text-center text-white fs-1">Rebecca Hurtado</Col>
                </Row>
                <Row>
                    <Col>
                        <img
                            src={portrait}
                            className='img-fluid shadow-lg p-5'
                            alt=''
                            style={{ maxWidth: '24rem' }}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <i class="fa-brands fa-linkedin fa-2xl fa-bounce"></i>
                    <i class="fa-solid fa-at fa-2xl fa-bounce"></i>
                    <i class="fa-brands fa-github-alt fa-2xl fa-bounce"></i>
                    </Col>
                </Row>
                <Row>
                    <Col className="school pt-4">
                    Full Stack Web Developer from Arizona at UofA. 
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About;