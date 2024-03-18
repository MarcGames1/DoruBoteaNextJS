// afisare conditionata cu varianta navbar phone
import React, { useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Link from "next/link";

const NavBot = () => {
  const [show, setShow] = useState(false);
  const showDropdown = () => {
    setShow(!show);
  };
  const hideDropdown = () => {
    setShow(false);
  };

  return (
    <>
      <Navbar bg="secondary-color" variant="dark" expand="md">
        <Container>
          <Container fluid>
            <Navbar.Brand className="  d-lg-none d-md-none d-sm-inline-block">
              <img
                src="/assets/images/Phone-layout.webp"
                alt="logo+phone"
                width={250}
                height={40}
              />
            </Navbar.Brand>
            <Navbar.Toggle
              className=" d-lg-none d-md-none d-sm-inline-block"
              aria-controls="basic-navbar-nav"
            />

            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto justify-self-evenly">
                <Nav.Link as={Link} className="align-self-center" href="/">
                  Acasa
                </Nav.Link>
                <NavDropdown
                  title="Servicii"
                  id="collasible-nav-dropdown"
                  className="align-self-center text-center"
                  show={show}
                  onMouseEnter={showDropdown}
                  onMouseLeave={hideDropdown}
                >
                  <NavDropdown.Item href="/drept-penal">
                    Drept Penal
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} href="/dreptul-familiei">
                    Dreptul Familiei
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} href="/drept-civil">
                    Drept Civil
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} href="/malpraxis-medical">
                    Malpraxis Medical
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} href="/dreptul-muncii">
                    Dreptul Muncii
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} href="/executari-silite">
                    Executari Silite
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} href="/drept-imobiliar">
                    Drept Imobiliar
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} href="/drept-contraventional">
                    Drept Contraventional
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} href="/drept-bancar">
                    Drept Bancar
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} href="/drept-administrativ">
                    Drept Administrativ
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link
                  as={Link}
                  className="align-self-center"
                  href="/avocat-online"
                >
                  Avocat Online
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  className="align-self-center"
                  href="/contact"
                >
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Container>
      </Navbar>
    </>
  );
};
export default NavBot;
