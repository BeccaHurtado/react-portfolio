import { Navbar, Container, Nav } from 'react-bootstrap';
import './nav.css'
// import {Link} from "react-router-dom"
function Navigation() {
    return (
        <Navbar className="color-nav">
            <Container className="color-nav justify-content-center">
                <Navbar.Brand className="text-white" href="/">Becca</Navbar.Brand>
                <Nav>
                    <Nav.Link className="text-white" href="/">About me</Nav.Link>
                    <Nav.Link className="text-white" href="/portfolio">Portfolio</Nav.Link>
                    <Nav.Link className="text-white" href="/resume">Resume</Nav.Link>
                    <Nav.Link className="text-white" href="/contact">Contact</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Navigation;


