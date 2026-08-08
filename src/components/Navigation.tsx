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
  const [openImpactGroup, setOpenImpactGroup] = useState<string | null>(null);
  const [openCampaignGroup, setOpenCampaignGroup] = useState<string | null>(null);
  const isFrench = locale === "fr-CA";
  const impactGroups = [
    {
      id: "clinical",
      label: isFrench ? "Volet clinique" : "Clinical",
      links: [
        {
          label: isFrench
            ? "Hôpital de recherche adapté aux enfants"
            : "Kid-Friendly Research Hospital",
          href: "#",
        },
      ],
    },
    {
      id: "non-clinical",
      label: isFrench ? "Volet non clinique" : "Non-Clinical",
      links: [
        {
          label: isFrench
            ? "Centres de thérapie par le mouvement"
            : "Movement Therapy Centers",
          href: localizedPath("/movement-therapy-center", locale),
        },
        { label: isFrench ? "Régions desservies" : "Service Areas", href: "#" },
      ],
    },
    {
      id: "charitable",
      label: isFrench ? "Volet caritatif" : "Charitable",
      links: [
        {
          label: isFrench ? "32 souhaits" : "32 Wishes",
          href: localizedPath("/32-wishes", locale),
        },
      ],
    },
  ];
  const campaignGroups = [
    {
      id: "private-campaigns",
      label: isFrench ? "Privées" : "Private",
      links: [
        {
          label: isFrench
            ? "Calendrier prévisionnel de l’initiative"
            : "Projected Initiative Timeline",
          href: localizedPath("/more-info", locale),
        },
      ],
    },
    {
      id: "public-campaigns",
      label: isFrench ? "Publiques" : "Public",
      links: [
        {
          label: isFrench ? "Marquez un but" : "Score a Goal",
          href: localizedPath("/fundraising", locale),
        },
      ],
    },
  ];

  return (
    <header className="site-header">
      <div className="language-bar">
        <LanguageSelector />
      </div>
      <Navbar expand="xl" className="site-navbar">
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
              <Nav.Link href={localizedPath("/", locale)}>
                {isFrench ? "Accueil" : "Home"}
              </Nav.Link>
              <NavDropdown
                autoClose="outside"
                className="site-nav-dropdown site-nav-dropdown--multilevel"
                id="impact-navigation"
                onToggle={(isOpen) => {
                  if (!isOpen) setOpenImpactGroup(null);
                }}
                title={isFrench ? "Points d’impact" : "Points of Impact"}
              >
                {impactGroups.map((group) => {
                  const isOpen = openImpactGroup === group.id;

                  return (
                    <div
                      className={`site-nav-submenu${isOpen ? " show" : ""}`}
                      key={group.id}
                      onMouseEnter={() => setOpenImpactGroup(group.id)}
                      onMouseLeave={() => setOpenImpactGroup(null)}
                    >
                      <button
                        aria-controls={`${group.id}-navigation`}
                        aria-expanded={isOpen}
                        className="dropdown-item dropdown-toggle site-nav-submenu__toggle"
                        onClick={() => setOpenImpactGroup(isOpen ? null : group.id)}
                        type="button"
                      >
                        {group.label}
                      </button>
                      <div
                        className={`dropdown-menu site-nav-submenu__menu${isOpen ? " show" : ""}`}
                        id={`${group.id}-navigation`}
                      >
                        {group.links.map((link) => (
                          <NavDropdown.Item href={link.href} key={link.label}>
                            {link.label}
                          </NavDropdown.Item>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </NavDropdown>
              <NavDropdown
                autoClose="outside"
                className="site-nav-dropdown site-nav-dropdown--multilevel"
                id="campaign-navigation"
                onToggle={(isOpen) => {
                  if (!isOpen) setOpenCampaignGroup(null);
                }}
                title={isFrench ? "Campagnes de lancement" : "Groundfloor Campaigns"}
              >
                {campaignGroups.map((group) => {
                  const isOpen = openCampaignGroup === group.id;

                  return (
                    <div
                      className={`site-nav-submenu${isOpen ? " show" : ""}`}
                      key={group.id}
                      onMouseEnter={() => setOpenCampaignGroup(group.id)}
                      onMouseLeave={() => setOpenCampaignGroup(null)}
                    >
                      <button
                        aria-controls={`${group.id}-navigation`}
                        aria-expanded={isOpen}
                        className="dropdown-item dropdown-toggle site-nav-submenu__toggle"
                        onClick={() => setOpenCampaignGroup(isOpen ? null : group.id)}
                        type="button"
                      >
                        {group.label}
                      </button>
                      <div
                        className={`dropdown-menu site-nav-submenu__menu${isOpen ? " show" : ""}`}
                        id={`${group.id}-navigation`}
                      >
                        {group.links.map((link) => (
                          <NavDropdown.Item href={link.href} key={link.label}>
                            {link.label}
                          </NavDropdown.Item>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </NavDropdown>
              <NavDropdown
                align="end"
                className="site-nav-dropdown"
                id="events-navigation"
                title={isFrench ? "Collectes de fonds à venir" : "Future Fundraising Events"}
              >
                <NavDropdown.Item href={localizedPath("/golf-tournament", locale)}>{isFrench ? "Tournoi de golf" : "Golf Tournament"}</NavDropdown.Item>
                <NavDropdown.Item href={localizedPath("/ballroom-dance-tournament", locale)}>{isFrench ? "Tournoi de danse de salon" : "Ballroom Dance Tournament"}</NavDropdown.Item>
                <NavDropdown.Item href="#">Seeds of Hope Festival</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href={localizedPath("/contact", locale)}>
                {isFrench ? "Nous joindre" : "Contact"}
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
      </Navbar>
    </header>
  );
}
