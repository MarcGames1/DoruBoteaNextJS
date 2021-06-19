// afisare conditionata cu varianta navbar phone
import React from "react";
import { NavbarBrandProps } from "react-bootstrap";
import { Button, Container, Form, FormControl, Nav, Navbar } from "react-bootstrap";


const NavBot = () => {
    return (
        <>
    <Navbar  bg="secondary-color" variant="dark"  expand="md">
  <Container  >
   
    <Navbar.Toggle aria-controls="basic-navbar-nav"  />
    <Navbar.Collapse className="justify-content-center" id="basic-navbar-nav">
        
      <Nav className="ml-auto justify-content-between">
         <>
         <Navbar.Brand className="  d-lg-none d-md-none d-sm-block"  href="#home">
             <img src="/assets/images/Phone-layout.webp"  alt="logo+phone" />
         </Navbar.Brand>
         </>
        <Nav.Link href="/">Acasa</Nav.Link>
        <Nav.Link href="#servicii">Servicii</Nav.Link>
        <Nav.Link href="/consultanta-online">Consultanta Online</Nav.Link>
        <Nav.Link href="/blog">Blog</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>
      </Nav>
 
    </Navbar.Collapse>
  </Container>
</Navbar>
        </>
    )
}
export default NavBot