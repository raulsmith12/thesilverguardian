"use client";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

const links = [
  { label: "Home", href: "/" },
  { label: "Score a Goal", href: "/fundraising" },
  { label: "32 Wishes", href: "/32-wishes" },
  { label: "Movement", href: "/movement-therapy-center" },
  { label: "Contact Us", href: "/contact" },
];

export function Navigation() {
  return (
    <Navbar expand="md" className="site-navbar" fixed="top">
      <Container className="site-navbar__inner">
        <Navbar.Brand className="site-navbar__brand h3 mb-0" href="/">
          The Silver Guardian
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="site-navigation"
          className="site-navbar__toggle"
        />
        <Navbar.Offcanvas
          id="site-navigation"
          aria-labelledby="site-navigation-label"
          placement="end"
          className="site-offcanvas"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="site-navigation-label">
              The Silver Guardian
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="ms-md-auto site-navbar__links">
              {links.map((link) => (
                <Nav.Link key={link.label} href={link.href}>
                  {link.label}
                </Nav.Link>
              ))}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
