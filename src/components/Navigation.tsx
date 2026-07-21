"use client";

import Image from "next/image";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { LanguageSelector } from "@/components/LanguageSelector";
import { localizedPath, type Locale } from "@/lib/i18n";
import silverGuardianLogo from "@/img/silver-guardian-w-child.png";

export function Navigation({ locale = "en" }: { locale?: Locale }) {
  const isFrench = locale === "fr-CA";
  const links = [
    { label: isFrench ? "Accueil" : "Home", href: "/" },
    { label: isFrench ? "Marquez un but" : "Score a Goal", href: "/fundraising" },
    { label: isFrench ? "32 souhaits" : "32 Wishes", href: "/32-wishes" },
    { label: isFrench ? "Mouvement" : "Movement", href: "/movement-therapy-center" },
    { label: isFrench ? "Nous joindre" : "Contact Us", href: "/contact" },
  ];

  return (
    <>
      <LanguageSelector />
      <Navbar expand="md" className="site-navbar" fixed="top">
      <Container className="site-navbar__inner">
        <Navbar.Brand className="site-navbar__brand h3 mb-0" href={localizedPath("/", locale)}>
          <Image
            src={silverGuardianLogo}
            alt=""
            className="brand-logo site-navbar__logo"
            unoptimized
          />
          <span>The Silver Guardian</span>
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
            <Offcanvas.Title
              id="site-navigation-label"
              className="brand-lockup"
            >
              <Image
                src={silverGuardianLogo}
                alt=""
                className="brand-logo site-offcanvas__logo"
                unoptimized
              />
              <span>The Silver Guardian</span>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="ms-md-auto site-navbar__links">
              {links.map((link) => (
                <Nav.Link key={link.label} href={localizedPath(link.href, locale)}>
                  {link.label}
                </Nav.Link>
              ))}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
      </Navbar>
    </>
  );
}
