// afisare conditionata cu varianta navbar phone
import React from "react";
import { NavbarBrandProps } from "react-bootstrap";
import { Button, Container, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import Image from "next/image";

const NavBot = () => {
    return (
        <>
    <Navbar  bg="secondary-color" variant="dark"  expand="md">
  <Container  >
   
    <Navbar.Toggle aria-controls="basic-navbar-nav"  />
    <Navbar.Collapse className="justify-content-center" id="basic-navbar-nav">
        
      <Nav className="ml-auto  justify-content-between">
         <>
         <Navbar.Brand className="  my-2 d-lg-none d-md-none d-sm-block"  href="#home">
             <Image src="/assets/images/Phone-layout.webp"  alt="logo+phone" width={300} height={50} layout='responsive' />
         </Navbar.Brand>
         </>
        <Nav.Link className='align-self-center' href="/">Acasa</Nav.Link>
        <Nav.Link className='align-self-center' href="#servicii">Servicii</Nav.Link>
        <Nav.Link className='align-self-center' href="/consultanta-online">Consultanta Online</Nav.Link>
        <Nav.Link className='align-self-center' href="/blog">Blog</Nav.Link>
        <Nav.Link className='align-self-center' href="/contact">Contact</Nav.Link>
      </Nav>
 
    </Navbar.Collapse>
  </Container>
</Navbar>
        </>
    )
}
export default NavBot