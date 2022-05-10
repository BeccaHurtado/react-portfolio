import React from "react";
import './portfolio.css';
import { Card, Container, Row, Col } from 'react-bootstrap';
import dashboard from './dashboard.png'
import javascript from './javascript-quiz.jpeg';
import moveies from './moveies.png';
import teamPortfolio from './team-portfolio.png'
import weather from './weather-dashboard.png';
import workday from './workday-scheduler.jpeg'

function Portfolio() {
    return (
        <div className="main">
            <Container className="pt-5">
                <Row>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={moveies} />
                            <Card.Body>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card>
                            <Card.Img variant="top" src={dashboard} />
                            <Card.Body>
                                <Card.Text>
                                    <div className="align-items-center">
                                        <span><i class="fa-solid fa-arrow-left fa-fw" title="Back"></i></span>
                                        <span><i class="fa-solid fa-arrow-right fa-fw" title="Forward"></i></span>
                                        <span><i class="fa-solid fa-arrows-rotate fa-fw" title="Refresh"></i></span>
                                        <span><i class="fa-solid fa-house fa-fw" title="Home"></i></span>
                                        <span><i class="fa-solid fa-info fa-fw" title="Info"></i></span>
                                        <span><i class="fa-solid fa-download fa-fw" title="Download"></i></span>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card>
                            <Card.Img variant="top" src={weather} />
                            <Card.Body>
                                <Card.Text>
                                    <div className="align-items-center">
                                        <span><i class="fa-solid fa-arrow-left fa-fw" title="Back"></i></span>
                                        <span><i class="fa-solid fa-arrow-right fa-fw" title="Forward"></i></span>
                                        <span><i class="fa-solid fa-arrows-rotate fa-fw" title="Refresh"></i></span>
                                        <span><i class="fa-solid fa-house fa-fw" title="Home"></i></span>
                                        <span><i class="fa-solid fa-info fa-fw" title="Info"></i></span>
                                        <span><i class="fa-solid fa-download fa-fw" title="Download"></i></span>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row className="pt-4">
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={javascript} />
                            <Card.Body>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card>
                            <Card.Img variant="top" src={teamPortfolio} />
                            <Card.Body>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={workday} />
                            <Card.Body>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}


export default Portfolio;