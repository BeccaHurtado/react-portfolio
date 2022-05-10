import React from "react";
import './portfolio.css';
import { Card, Container, Row, Col } from 'react-bootstrap';
import dashboard from './dashboard.png'
import javascript from './javascript-quiz.jpeg';
import moveies from './moveies.png';
import teamPortfolio from './team-portfolio.png'
import weather from './weather-dashboard.png';
import workday from './workday-scheduler.jpeg';

function Portfolio() {
    return (
        <div className="main">
            <Container>
                <Row >
                    <Col>
                        <Card className="bg-dark text-white">
                            <Card.Img src={javascript} alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title className="text-dark">Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="bg-dark text-white">
                            <Card.Img src={dashboard} alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title className="text-dark">Card title</Card.Title>
                                <Card.Text className="text">
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="bg-dark text-white">
                            <Card.Img src={moveies} alt="Card image" className="moveies" />
                        </Card>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row >
                    <Col>
                        <Card className="bg-dark text-white">
                            <Card.Img src={teamPortfolio} alt="Card image" className="team" />
                            <Card.ImgOverlay>
                                <Card.Title className="text-dark">Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="bg-dark text-white">
                            <Card.Img src={weather} alt="Card image" className="weather"/>
                            <Card.ImgOverlay>
                                <Card.Title className="text-dark">Card title</Card.Title>
                                <Card.Text className="text">
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="bg-dark text-white">
                            <Card.Img src={workday} alt="Card image" className="workday" />
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}


export default Portfolio;