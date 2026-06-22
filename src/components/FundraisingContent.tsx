"use client";

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import ProgressBar from "react-bootstrap/ProgressBar";

const currentAmount = 0;
const goalAmount = 5000000;
const progressPercent = Math.round((currentAmount / goalAmount) * 100);

export function FundraisingContent() {
  const [showDonationModal, setShowDonationModal] = useState(false);

  return (
    <div className="fundraising-layout">
      <section className="fundraising-intro">
        <div>
          <p className="section-kicker">Community support</p>
          <h2 className="section-title">
            Donate time, resources, or $1 per household member.
          </h2>
        </div>
        <p>
          The Silver Guardian is preparing seasonal fundraising efforts to help
          gather support for a proposed charitable pediatric cancer and
          cardiovascular hospital concept. Dates and event details are still
          being finalized, but the community can begin preparing to take part.
        </p>
      </section>

      <section className="fundraising-grid" aria-label="Fundraising options">
        <article className="fundraising-card">
          <p className="fundraising-card__season">Spring / Summer</p>
          <h3>Golf Fundraiser</h3>
          <p>
            A community golf event is being planned as one of the signature
            fundraising opportunities for The Silver Guardian.
          </p>
          <span>Coming soon</span>
        </article>

        <article className="fundraising-card">
          <p className="fundraising-card__season">Fall</p>
          <h3>Ballroom Dance Fundraiser</h3>
          <p>
            A ballroom dance event is being developed to bring supporters
            together around movement, resilience, and family-centered care.
          </p>
          <span>Coming soon</span>
        </article>

        <article className="fundraising-card fundraising-card--featured">
          <p className="fundraising-card__season">Community campaign</p>
          <h3>$1 Per Person</h3>
          <p>
            If someone in your family has been affected by cancer or heart
            disease, especially as a pediatric patient, please contribute $1 per
            person in your immediate household as a demonstration of support.
          </p>
          <p className="fundraising-card__note">
            Contributions are limited to the exact number of immediate household
            members. Please contact customer support if you would like to give
            more.
          </p>
          <Button
            className="site-button site-button--primary"
            onClick={() => setShowDonationModal(true)}
          >
            Donate $1 Per Person
          </Button>
        </article>
      </section>

      <section className="fundraising-tracker" aria-label="Fundraising tracker">
        <div>
          <p className="section-kicker">Fundraising tracker</p>
          <h2>Progress toward the first major fundraising goal</h2>
          <p>
            This tracker will give supporters a visual understanding of where
            The Silver Guardian stands as donations and sponsorships begin.
          </p>
        </div>
        <div className="fundraising-tracker__meter">
          <div className="fundraising-tracker__numbers">
            <span>${currentAmount.toLocaleString()} raised</span>
            <span>${goalAmount.toLocaleString()} goal</span>
          </div>
          <ProgressBar now={progressPercent} aria-label="Fundraising progress" />
          <p>{progressPercent}% funded</p>
        </div>
      </section>

      <Modal
        show={showDonationModal}
        onHide={() => setShowDonationModal(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>$1 Per Person Donation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="donation-modal__intro">
            Please share your contact information. Email will be used as the
            unique supporter key when donation processing is connected.
          </p>
          <Form>
            <Form.Group className="mb-3" controlId="donorName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Your full name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="donorPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="tel" placeholder="Your phone number" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="donorEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="you@example.com" />
            </Form.Group>
          </Form>
          <p className="donation-modal__note">
            PayPal donation processing is coming soon.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="outline-secondary"
            onClick={() => setShowDonationModal(false)}
          >
            Close
          </Button>
          <Button className="site-button site-button--primary" disabled>
            Continue to PayPal
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
