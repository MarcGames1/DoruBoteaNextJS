// afisare conditionata cu varianta navbar phone
import React from "react";
import {  Container, Nav, Navbar } from "react-bootstrap";


const NavBot = () => {
    return (
        <>
    <Navbar  bg="secondary-color" variant="dark"  expand="md">
  <Container  >
   <Container fluid>
           <Navbar.Brand className="  d-lg-none d-md-none d-sm-inline-block"  href="#home">
               <img src="/assets/images/Phone-layout.webp"  alt="logo+phone" width={250} height={40} />
           </Navbar.Brand>
    <Navbar.Toggle className=' d-inline-block'  aria-controls="basic-navbar-nav"  />
              
    <Navbar.Collapse id="basic-navbar-nav">
        
        <Nav className="mx-auto justify-self-evenly">
           
          <Nav.Link className='align-self-center' href="/">Acasa</Nav.Link>
          <Nav.Link className='align-self-center' href="#servicii">Servicii</Nav.Link>
          <Nav.Link className='align-self-center' href="/avocat-online">Avocat Online</Nav.Link>
          <Nav.Link className='align-self-center' href="/blog">Blog</Nav.Link>
          <Nav.Link className='align-self-center' href="/contact">Contact</Nav.Link>
        </Nav>
   
      </Navbar.Collapse>
    </Container>
 
  </Container>
</Navbar>
        </>
    )
}
export default NavBot