//navbar
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget';


function NavBar () {
    return(
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home" className='logo'>Habitat</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">

            <Nav >

              <Nav.Link href="#women">Women</Nav.Link>
              <Nav.Link href="#men">Men</Nav.Link>
              <Nav.Link href="#jewerly">Jewerly</Nav.Link>
              <Nav.Link href="#electronics">Electronics</Nav.Link>

            </Nav>
           
          </Navbar.Collapse>

          <CartWidget />
                    
        </Container>
      </Navbar>
    )
}

export default NavBar;


