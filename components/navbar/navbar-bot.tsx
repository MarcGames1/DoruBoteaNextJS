// afisare conditionata cu varianta navbar phone
import React, { useState } from "react";
import {  Container, Nav, Navbar, NavDropdown } from "react-bootstrap";


const NavBot = () => {
  const [show, setShow] = useState(false);
  const showDropdown = (e)=>{
      setShow(!show);
  }
  const hideDropdown = e => {
      setShow(false);
  }

    return (
        <>
    <Navbar  bg="secondary-color" variant="dark"  expand="md">
  <Container  >
   <Container fluid>
           <Navbar.Brand className="  d-lg-none d-md-none d-sm-inline-block"  href="#home">
               <img src="/assets/images/Phone-layout.webp"  alt="logo+phone" width={250} height={40} />
           </Navbar.Brand>
    <Navbar.Toggle className=' d-lg-none d-md-none d-sm-inline-block'  aria-controls="basic-navbar-nav"  />
              
    <Navbar.Collapse id="basic-navbar-nav">
        
        <Nav className="mx-auto justify-self-evenly">
           
          <Nav.Link className='align-self-center' href="/">Acasa</Nav.Link>
          <NavDropdown title="Servicii" 
            id="collasible-nav-dropdown" 
            className='align-self-center'
            show={show}
            onMouseEnter={showDropdown} 
            onMouseLeave={hideDropdown}
   >
            
          <NavDropdown.Item href="/drept-penal">Drept Penal</NavDropdown.Item>
          <NavDropdown.Item href="/dreptul-familiei">Dreptul Familiei</NavDropdown.Item>
          <NavDropdown.Item href="/drept-civil">Drept Civil</NavDropdown.Item>
          <NavDropdown.Item href="/malpraxis-medical">Malpraxis Medical</NavDropdown.Item>
          <NavDropdown.Item href="/dreptul-muncii">Dreptul Muncii</NavDropdown.Item>
          <NavDropdown.Item href="/executari-silite">Executari Silite</NavDropdown.Item>
          <NavDropdown.Item href="/drept-imobiliar">Drept Imobiliar</NavDropdown.Item>
          <NavDropdown.Item href="/drept-contraventional">Drept Contraventional</NavDropdown.Item>
          <NavDropdown.Item href="/drept-bancar">Drept Bancar</NavDropdown.Item>
          <NavDropdown.Item href="/drept-administrativ">Drept Administrativ</NavDropdown.Item>
         
        </NavDropdown>
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