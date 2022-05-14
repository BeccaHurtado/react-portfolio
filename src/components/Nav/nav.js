import { Navbar, Container, Nav } from 'react-bootstrap';

// import {Link} from "react-router-dom"
function Navigation() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Becca</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">About me</Nav.Link>
                    <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                    <Nav.Link href="/resume">Resume</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Navigation;


