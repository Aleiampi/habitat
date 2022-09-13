//navbar
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget';


function NavBar ({categories}) {

   return(
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to={`/`} className='logo'>Habitat</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">

            <Nav >

              {categories.map((category)=>{
                return (
                  
                  <Nav.Link as={Link} to={`/category/${category}`}>{category}</Nav.Link>
                )
                
              })}

            </Nav>
           
          </Navbar.Collapse>

          <CartWidget />
                    
        </Container>
      </Navbar>
    )
}

export default NavBar;


