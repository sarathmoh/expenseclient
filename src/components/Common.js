import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Outlet} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Common = () => {
const navigate=useNavigate();
const logout=()=>{
localStorage.removeItem("token");
navigate('/login');
 }

  return (

    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">Expense Track</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          {/*<Nav.Link href="#features">About</Nav.Link>
          <Nav.Link href="#pricing">Contact</Nav.Link> */}
        </Nav>
        <Nav>
          {/* <Nav.Link href="#deets">More deets</Nav.Link> */}
          <Nav.Link  onClick={logout} >
           Logout
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

  <Outlet/>
  </>
  
  )


}

export default Common




