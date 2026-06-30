"use client";

import Image from "next/image";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import ProgressBar from "react-bootstrap/ProgressBar";
import ballroomDanceImage from "@/img/preillumination-seth-cNlQpTstCK8-unsplash.jpg";
import golfTournamentImage from "@/img/e4f884df0b93d4eb7d893f327084b05c3ccbf956-1.jpg";
import scoreAGoalImage from "@/img/gerhard-crous-doivHPaG-Vw-unsplash.jpg";

const currentAmount = 0;
const goalAmount = 5000000;
const progressPercent = Math.round((currentAmount / goalAmount) * 100);

export function FundraisingContent() {
  const [showDonationModal, setShowDonationModal] = useState(false);

  return (
    <div className="fundraising-layout">
      <section className="fundraising-intro">
        <div>
          <h2 className="section-title">
            Community Campaign
          </h2>
        </div>
        <p>
          The Silver Guardian is preparing seasonal events to help demonstrate support for communities battling pediatric conditions such as cancer and heart disease. Events details are still being finalized, please sign up to receive regular updates via our newsletter.
        </p>
      </section>

      <section className="fundraising-grid" aria-label="Fundraising options">
        <article className="fundraising-card">
          <p className="fundraising-card__season">Spring / Summer</p>
          <h3>Annual Golf Tournaments</h3>
          <div className="fundraising-card__image">
            <Image
              src={golfTournamentImage}
              alt="Golf ball resting beside a hole on a golf course"
              fill
              placeholder="blur"
              sizes="(max-width: 767px) 100vw, 33vw"
              unoptimized
            />
          </div>
          <p>
            Charity golf events will be signature opportunities to demonstrate support for the pediatric cancer/heart disease community.
          </p>
          <span>Coming soon</span>
        </article>

        <article className="fundraising-card">
          <p className="fundraising-card__season">Fall</p>
          <h3>Annual Ballroom Dance Tournament</h3>
          <div className="fundraising-card__image">
            <Image
              src={ballroomDanceImage}
              alt="Ballroom dancers performing together"
              fill
              placeholder="blur"
              sizes="(max-width: 767px) 100vw, 33vw"
              unoptimized
            />
          </div>
          <p>
            A one of a kind ballroom dance competition is being developed to strengthen pediatric cancer/heart disease communities through artistic movement and competitive resilience.
          </p>
          <span>Coming soon</span>
        </article>

        <article className="fundraising-card fundraising-card--featured">
          <p className="fundraising-card__season">Score a Goal Campaign</p>
          <h3>$1 Per Person</h3>
          <div className="fundraising-card__image">
            <Image
              src={scoreAGoalImage}
              alt="Ice hockey player taking a shot"
              fill
              placeholder="blur"
              sizes="(max-width: 767px) 100vw, 33vw"
              unoptimized
            />
          </div>
          <p>
            If someone in your family has been affected by cancer or heart disease, especially as a pediatric patient, or you are a fan of the sport of ice hockey, please contribute $1 per person in your immediate household as a demonstration of support.
          </p>
          <p className="fundraising-card__note">
            Support tokens are limited to the exact number of immediate household members.
          </p>
          <Button
            className="site-button site-button--primary"
            onClick={() => setShowDonationModal(true)}
          >
            Support Here
          </Button>
        </article>
      </section>

      <section className="fundraising-tracker" aria-label="Fundraising tracker">
        <div>
          <h2 className="section-kicker">Goal Tracker</h2>
        </div>
        <div className="fundraising-tracker__meter">
          <div className="fundraising-tracker__numbers">
            <span>${currentAmount.toLocaleString()} raised</span>
            <span>Goal: {goalAmount.toLocaleString()} people</span>
          </div>
          <ProgressBar now={progressPercent} aria-label="Fundraising progress" />
          <div className="fundraising-tracker__numbers">
            <span>Support Percentage: {progressPercent}%</span>
          </div>
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
