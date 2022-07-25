//navbar
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import './Navbar.css'


function NavBar () {
    return(
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home" className='logo'>Habitat</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">

            <Nav >

              <Nav.Link href="#livingroom">Livingroom</Nav.Link>
              <Nav.Link href="#bedroom">Bedroom</Nav.Link>
              <Nav.Link href="#kitchen">Kitchen</Nav.Link>
              <Nav.Link href="#organization">Organization</Nav.Link>

            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default NavBar;


