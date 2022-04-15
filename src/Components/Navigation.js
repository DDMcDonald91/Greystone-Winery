import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './Images/logo.png';

export default function Navigation() {
  return (
    <Navbar style={{height: 'auto', padding: '0px'}} bg="light" variant="light" expand="lg">
      <Container>
      <div id="logo-container home">
        <img
        id="logo"
        src={logo}
        />
      </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#details-container">About</Nav.Link>
            <Nav.Link href="#team">Team</Nav.Link>
            <Nav.Link href="#form-container">Contact</Nav.Link>
            <NavDropdown title="Social Media" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://www.facebook.com" target="_blank">Facebook</NavDropdown.Item>
              <NavDropdown.Item href="https://www.instagram.com" target="_blank">Instagram</NavDropdown.Item>
              <NavDropdown.Item href="https://www.pinterest.com" target="_blank">Pinterest</NavDropdown.Item>
              <NavDropdown.Item href="https://www.youtube.com" target="_blank">Youtube</NavDropdown.Item>
              <NavDropdown.Item href="https://www.snapchat.com" target="_blank">Snapchat</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
