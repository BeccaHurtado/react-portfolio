import React from 'react'
import './about.css'
import portrait from './portrait.png'
import { Container, Row, Col } from 'react-bootstrap';
import {Figure} from 'react-bootstrap'

function About() {
    return (
        <div className="header">
            <Container>
                <Row>
                    <Col className="fs-1 text-center pt-5">Rebecca Hurtado</Col>
                </Row>
                <Row>
                    <Col>
                    <Figure>
                        <Figure.Image
                            alt="171x180"
                            src={portrait}
                        />
                        <Figure.Caption>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id necessitatibus quisquam ab a voluptate iste velit nemo reiciendis. Commodi optio aliquam nostrum maiores quam ut perspiciatis! Autem hic error minus.
                        </Figure.Caption>
                    </Figure> 
                    </Col>
                    <Col>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur facere accusantium reiciendis voluptatibus suscipit, recusandae nesciunt illo sint mollitia a iure deserunt consequatur similique. Exercitationem, soluta, qui doloribus, distinctio recusandae expedita hic repellendus magnam similique quo deleniti culpa saepe ex unde nam molestiae eaque sed velit fuga debitis consequatur quam.
                    </Col>
                </Row>
            </Container>
        </div>




        // <section className="container" id="about">
        //     <Carousel>
        //         <Carousel.Item>
        //             <img
        //                 className="d-block w-100"
        //                 src={process.env.PUBLIC_URL + '/assets/aboutme/portrait.png'}
        //                 alt="First slide"
        //             />
        //             <Carousel.Caption>
        //                 <h3>First slide label</h3>
        //                 <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        //             </Carousel.Caption>
        //         </Carousel.Item>
        //         <Carousel.Item>
        //             <img
        //                 className="d-block w-100"
        //                 src={process.env.PUBLIC_URL + '/assets/aboutme/portrait.png'}
        //                 alt="Second slide"
        //             />

        //             <Carousel.Caption>
        //                 <h3>Second slide label</h3>
        //                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        //             </Carousel.Caption>
        //         </Carousel.Item>
        //         <Carousel.Item>
        //             <img
        //                 className="d-block w-100"
        //                 src={process.env.PUBLIC_URL + '/assets/aboutme/portrait.png'}
        //                 alt="Third slide"
        //             />

        //             <Carousel.Caption>
        //                 <h3>Third slide label</h3>
        //                 <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        //             </Carousel.Caption>
        //         </Carousel.Item>
        //     </Carousel>
        // </section>
        // <Container>
        //     <Row>
        //         <Col xs={6} md={4} className="bg-image hover-overlay">
        //             <Image src="/assets/aboutme/portrait.png" style={{ maxWidth: '16rem' }} />
        //             <a href='#!'>
        //                 <div className="mask overlay" style={{ backgroundColor: 'rgba(57, 192, 237, 0.2' }}></div>
        //             </a>
        //         </Col>
        //         <Col xs={6} md={4}>
        //             Rebecca Hurtado
        //         </Col>
        //         <Col xs={6} md={4}>
        //             <Image src="/thumbnail.png" className="thumbnail" />
        //         </Col>
        //     </Row>
        // </Container>
    )
}

export default About;