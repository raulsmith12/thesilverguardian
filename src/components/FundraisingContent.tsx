"use client";

import Image from "next/image";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ProgressBar from "react-bootstrap/ProgressBar";
import ballroomDanceImage from "@/img/c3a93a8777a0af0f74eb8ff120553e56fb08dd2d-1.jpeg";
import golfTournamentImage from "@/img/e4f884df0b93d4eb7d893f327084b05c3ccbf956-1.jpg";
import scoreAGoalImage from "@/img/samantha-gades-iks9hBNKa6E-unsplash.jpg";
// import { apiBaseUrl } from "@/lib/api";
// import {
//   emailValidationPattern,
//   emailValidationTitle,
// } from "@/lib/formValidation";

const currentAmount = 0;
const goalAmount = 5000000;
const progressPercent = Math.round((currentAmount / goalAmount) * 100);
// const paymentStatusPollDelayMs = 2000;
// const paymentStatusMaxPolls = 90;
//
// type PaymentMethod = "card" | "apple_pay" | "google_pay";
//
// type DonationStatus =
//   | {
//       type: "idle";
//       message: "";
//     }
//   | {
//       type: "success" | "error";
//       message: string;
//     };
//
// type SupportPaymentResponse = {
//   paymentId?: string;
//   status?: "pending" | "processing" | "completed" | "declined";
//   reason?: string;
// };
//
// const initialPaymentForm = {
//   firstName: "",
//   lastName: "",
//   email: "",
//   paymentMethod: "card" as PaymentMethod,
//   subscribeToNewsletter: false,
// };
//
// function getDeclinedMessage(reason?: string) {
//   if (reason === "processor_not_configured") {
//     return "The payment processor is not configured yet. Please try again after the banking details are connected.";
//   }
//
//   return "The support payment was declined. Please review your information or choose another payment method.";
// }
//
// function wait(milliseconds: number) {
//   return new Promise((resolve) => window.setTimeout(resolve, milliseconds));
// }

export function FundraisingContent() {
  // const [donationStatus, setDonationStatus] = useState<DonationStatus>({
  //   type: "idle",
  //   message: "",
  // });
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);
  // const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  // const [paymentForm, setPaymentForm] = useState(initialPaymentForm);

  function handleSupportClick() {
    // setPaymentForm(initialPaymentForm);
    // setDonationStatus({
    //   type: "idle",
    //   message: "",
    // });
    setIsDonationModalOpen(true);
  }

  function handleModalHide() {
    // if (!isProcessingPayment) {
    setIsDonationModalOpen(false);
    // }
  }

  // async function pollPaymentStatus(paymentId: string) {
  //   for (let attempt = 0; attempt < paymentStatusMaxPolls; attempt += 1) {
  //     await wait(paymentStatusPollDelayMs);
  //
  //     const response = await fetch(
  //       `${apiBaseUrl}/support-payments/${encodeURIComponent(paymentId)}`,
  //     );
  //     const data = (await response.json().catch(() => null)) as
  //       | SupportPaymentResponse
  //       | null;
  //
  //     if (!response.ok || !data?.status) {
  //       throw new Error("Payment status could not be checked");
  //     }
  //
  //     if (data.status === "completed" || data.status === "declined") {
  //       return data;
  //     }
  //   }
  //
  //   throw new Error("Payment processing timed out");
  // }
  //
  // async function handleConfirmDonation(event: FormEvent<HTMLFormElement>) {
  //   event.preventDefault();
  //   setIsProcessingPayment(true);
  //   setDonationStatus({
  //     type: "idle",
  //     message: "",
  //   });
  //
  //   try {
  //     const response = await fetch(`${apiBaseUrl}/support-payments`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(paymentForm),
  //     });
  //     const data = (await response.json().catch(() => null)) as
  //       | SupportPaymentResponse
  //       | null;
  //     const paymentResult =
  //       data?.status === "processing" && data.paymentId
  //         ? await pollPaymentStatus(data.paymentId)
  //         : data;
  //
  //     if (paymentResult?.status === "completed") {
  //       setDonationStatus({
  //         type: "success",
  //         message: "Thank you. Your $1 support payment was processed.",
  //       });
  //       setIsDonationModalOpen(false);
  //       setPaymentForm(initialPaymentForm);
  //       return;
  //     }
  //
  //     if (paymentResult?.status === "declined") {
  //       setDonationStatus({
  //         type: "error",
  //         message: getDeclinedMessage(paymentResult.reason),
  //       });
  //       return;
  //     }
  //
  //     if (!response.ok) {
  //       setDonationStatus({
  //         type: "error",
  //         message: "The support payment could not be started. Please try again.",
  //       });
  //       return;
  //     }
  //
  //     setDonationStatus({
  //       type: "error",
  //       message: "The payment is still processing. Please try again shortly.",
  //     });
  //   } catch {
  //     setDonationStatus({
  //       type: "error",
  //       message: "The support payment could not be processed. Please try again.",
  //     });
  //   } finally {
  //     setIsProcessingPayment(false);
  //   }
  // }

  return (
    <div className="fundraising-layout">
      <section className="fundraising-intro">
        <div>
          <h2 className="section-title">
            Community Campaign
          </h2>
        </div>
        <p>
          The Silver Guardian is preparing seasonal events to help demonstrate support for communities battling pediatric conditions such as cancer and heart disease. Event details are still being finalized, please sign up to receive regular updates via our newsletter.
        </p>
      </section>

      <section className="fundraising-grid" aria-label="Fundraising options">
        <article className="fundraising-card">
          <p className="fundraising-card__season">Spring / Summer / Fall</p>
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

        <article className="fundraising-card fundraising-card--featured">
          <p className="fundraising-card__season">Score a Goal Campaign</p>
          <h3>$1 US Per Person</h3>
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
            Has someone in your family been affected by cancer, Parkinson&apos;s, or heart disease?
          </p>
          <p>
            Are you an ice hockey fan?
          </p>
          <p>
            If so, please contribute $1 US as a demonstration of community support for this initiative.
          </p>
          <p>
            Tokens of support are limited to the exact number of people in immediate households: 4 people = $4 US.
          </p>
          <Button
            className="site-button site-button--primary"
            onClick={handleSupportClick}
          >
            Support Here
          </Button>
          {/* {donationStatus.type === "success" ? (
            <p
              className={`form-status form-status--${donationStatus.type}`}
              role="status"
            >
              {donationStatus.message}
            </p>
          ) : null} */}
        </article>

        <section
          className="fundraising-tracker"
          aria-label="Fundraising tracker"
        >
          <div>
            <h2 className="section-kicker">Goal Tracker</h2>
          </div>
          <div className="fundraising-tracker__meter">
            <div className="fundraising-tracker__numbers">
              <span>${currentAmount.toLocaleString()} raised</span>
              <span>Goal: {goalAmount.toLocaleString()} people</span>
            </div>
            <ProgressBar
              now={progressPercent}
              aria-label="Fundraising progress"
            />
            <div className="fundraising-tracker__numbers">
              <span>Support Percentage: {progressPercent}%</span>
            </div>
          </div>
        </section>

        <article className="fundraising-card">
          <p className="fundraising-card__season">Winter</p>
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
      </section>

      <Modal
        show={isDonationModalOpen}
        onHide={handleModalHide}
        centered
        aria-labelledby="support-info-modal-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="support-info-modal-title">
            Support The Silver Guardian
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="donation-modal__intro">
            Interested in supporting The Silver Guardian? Our payment processor
            is still under construction. Please check back on Monday, July 13,
            2026, as we build the fastest and most secure way for you to support
            our cause. Thank you for your patience.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="site-button site-button--primary"
            onClick={handleModalHide}
          >
            Close
          </Button>
        </Modal.Footer>
        {/* <form onSubmit={handleConfirmDonation}>
          <Modal.Body>
            <p className="donation-modal__intro">
              By demonstrating your support for The Silver Guardian, you are
              helping to make sure that the concept of a state of the art, kid
              friendly, ice hockey themed hospital facility becomes a reality to
              provide hope and healing, especially to brave children battling
              cancer and heart disease. Thank you for supporting the cause!
            </p>
            <div className="donation-modal__fields">
              <label>
                <span>First name</span>
                <input
                  type="text"
                  name="firstName"
                  value={paymentForm.firstName}
                  maxLength={100}
                  required
                  autoComplete="given-name"
                  disabled={isProcessingPayment}
                  onChange={(event) =>
                    setPaymentForm((current) => ({
                      ...current,
                      firstName: event.target.value,
                    }))
                  }
                />
              </label>
              <label>
                <span>Last name</span>
                <input
                  type="text"
                  name="lastName"
                  value={paymentForm.lastName}
                  maxLength={100}
                  required
                  autoComplete="family-name"
                  disabled={isProcessingPayment}
                  onChange={(event) =>
                    setPaymentForm((current) => ({
                      ...current,
                      lastName: event.target.value,
                    }))
                  }
                />
              </label>
              <label className="donation-modal__email">
                <span>Email address</span>
                <input
                  type="email"
                  name="email"
                  value={paymentForm.email}
                  pattern={emailValidationPattern}
                  title={emailValidationTitle}
                  maxLength={320}
                  required
                  autoComplete="email"
                  disabled={isProcessingPayment}
                  onChange={(event) =>
                    setPaymentForm((current) => ({
                      ...current,
                      email: event.target.value,
                    }))
                  }
                />
              </label>
            </div>
            <fieldset className="donation-modal__payment-methods">
              <legend>Payment method</legend>
              {[
                ["card", "Credit card"],
                ["apple_pay", "Apple Pay"],
                ["google_pay", "Google Pay"],
              ].map(([value, label]) => (
                <label key={value}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value={value}
                    checked={paymentForm.paymentMethod === value}
                    disabled={isProcessingPayment}
                    onChange={() =>
                      setPaymentForm((current) => ({
                        ...current,
                        paymentMethod: value as PaymentMethod,
                      }))
                    }
                  />
                  <span>{label}</span>
                </label>
              ))}
            </fieldset>
            <label className="donation-modal__newsletter-opt-in">
              <input
                type="checkbox"
                checked={paymentForm.subscribeToNewsletter}
                disabled={isProcessingPayment}
                onChange={(event) =>
                  setPaymentForm((current) => ({
                    ...current,
                    subscribeToNewsletter: event.target.checked,
                  }))
                }
              />
              <span>
                Please check this box if you would like to subscribe to our
                monthly newsletter for updates on The Silver Guardian&apos;s
                progress:
              </span>
            </label>
            {donationStatus.type !== "idle" ? (
              <p
                className={`form-status form-status--${donationStatus.type}`}
                role="status"
              >
                {donationStatus.message}
              </p>
            ) : null}
          </Modal.Body>
          <Modal.Footer>
            <Button
              className="site-button site-button--secondary"
              onClick={handleModalHide}
              disabled={isProcessingPayment}
            >
              Cancel
            </Button>
            <Button
              className="site-button site-button--primary"
              type="submit"
              disabled={isProcessingPayment}
            >
              {isProcessingPayment ? "Processing..." : "Pay $1"}
            </Button>
          </Modal.Footer>
        </form> */}
      </Modal>
    </div>
  );
}
