"use client";

import Image from "next/image";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { LanguageSelector } from "@/components/LanguageSelector";
import { localizedPath, type Locale } from "@/lib/i18n";
import silverGuardianLogo from "@/img/silver-guardian-w-child.png";

export function Navigation({ locale = "en" }: { locale?: Locale }) {
  const [showCanada, setShowCanada] = useState(false);
  const [showQuebec, setShowQuebec] = useState(false);
  const [showUnitedStates, setShowUnitedStates] = useState(false);
  const [showNorthCarolina, setShowNorthCarolina] = useState(false);
  const isFrench = locale === "fr-CA";
  const links = [
    { label: isFrench ? "Accueil" : "Home", href: "/" },
    { label: isFrench ? "Marquez un but" : "Score a Goal", href: "/fundraising" },
    { label: isFrench ? "32 souhaits" : "32 Wishes", href: "/32-wishes" },
    { label: isFrench ? "Mouvement" : "Movement", href: "/movement-therapy-center" },
  ];

  return (
    <header className="site-header">
      <div className="language-bar">
        <LanguageSelector />
      </div>
      <Navbar expand="md" className="site-navbar">
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
              <Nav.Link href={localizedPath("/contact", locale)}>
                {isFrench ? "Nous joindre" : "Contact Us"}
              </Nav.Link>
              <NavDropdown
                align="end"
                autoClose="outside"
                className="d-none site-nav-dropdown"
                id="areas-navigation"
                title={isFrench ? "Régions" : "Areas"}
              >
                <div
                  className={`site-nav-submenu${showCanada ? " show" : ""}`}
                  onMouseEnter={() => setShowCanada(true)}
                  onMouseLeave={() => {
                    setShowCanada(false);
                    setShowQuebec(false);
                  }}
                >
                  <button
                    aria-expanded={showCanada}
                    aria-controls="canada-navigation"
                    className="dropdown-item dropdown-toggle site-nav-submenu__toggle"
                    onClick={() => {
                      if (showCanada) setShowQuebec(false);
                      setShowCanada(!showCanada);
                    }}
                    type="button"
                  >
                    Canada
                  </button>
                  <div id="canada-navigation" className={`dropdown-menu site-nav-submenu__menu${showCanada ? " show" : ""}`}>
                    <div
                      className={`site-nav-submenu${showQuebec ? " show" : ""}`}
                      onMouseEnter={() => setShowQuebec(true)}
                      onMouseLeave={() => setShowQuebec(false)}
                    >
                      <button
                        aria-expanded={showQuebec}
                        aria-controls="quebec-navigation"
                        className="dropdown-item dropdown-toggle site-nav-submenu__toggle"
                        onClick={() => setShowQuebec((current) => !current)}
                        type="button"
                      >
                        Quebec
                      </button>
                      <div id="quebec-navigation" className={`dropdown-menu site-nav-submenu__menu${showQuebec ? " show" : ""}`}>
                        <NavDropdown.Item href={localizedPath("/montreal", locale)}>Montréal</NavDropdown.Item>
                        <NavDropdown.Item href={localizedPath("/laval", locale)}>Laval</NavDropdown.Item>
                        <NavDropdown.Item href={localizedPath("/longueuil", locale)}>Longueuil</NavDropdown.Item>
                        <NavDropdown.Item href={localizedPath("/brossard", locale)}>Brossard</NavDropdown.Item>
                        <NavDropdown.Item href={localizedPath("/terrebonne", locale)}>Terrebonne</NavDropdown.Item>
                        <NavDropdown.Item href={localizedPath("/pointe-claire", locale)}>Pointe-Claire</NavDropdown.Item>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`site-nav-submenu${showUnitedStates ? " show" : ""}`}
                  onMouseEnter={() => setShowUnitedStates(true)}
                  onMouseLeave={() => {
                    setShowUnitedStates(false);
                    setShowNorthCarolina(false);
                  }}
                >
                  <button
                    aria-expanded={showUnitedStates}
                    aria-controls="united-states-navigation"
                    className="dropdown-item dropdown-toggle site-nav-submenu__toggle"
                    onClick={() => {
                      if (showUnitedStates) setShowNorthCarolina(false);
                      setShowUnitedStates(!showUnitedStates);
                    }}
                    type="button"
                  >
                    {isFrench ? "États-Unis" : "United States"}
                  </button>
                  <div id="united-states-navigation" className={`dropdown-menu site-nav-submenu__menu${showUnitedStates ? " show" : ""}`}>
                    <div
                      className={`site-nav-submenu${showNorthCarolina ? " show" : ""}`}
                      onMouseEnter={() => setShowNorthCarolina(true)}
                      onMouseLeave={() => setShowNorthCarolina(false)}
                    >
                      <button
                        aria-expanded={showNorthCarolina}
                        aria-controls="north-carolina-navigation"
                        className="dropdown-item dropdown-toggle site-nav-submenu__toggle"
                        onClick={() => setShowNorthCarolina((current) => !current)}
                        type="button"
                      >
                        {isFrench ? "Caroline du Nord" : "North Carolina"}
                      </button>
                      <div id="north-carolina-navigation" className={`dropdown-menu site-nav-submenu__menu${showNorthCarolina ? " show" : ""}`}>
                        <NavDropdown.Item href={localizedPath("/raleigh-durham", locale)}>Raleigh–Durham</NavDropdown.Item>
                      </div>
                    </div>
                  </div>
                </div>
              </NavDropdown>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
      </Navbar>
    </header>
  );
}
