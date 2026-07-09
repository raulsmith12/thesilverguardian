"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ProgressBar from "react-bootstrap/ProgressBar";
import ballroomDanceImage from "@/img/c3a93a8777a0af0f74eb8ff120553e56fb08dd2d-1.jpeg";
import golfTournamentImage from "@/img/e4f884df0b93d4eb7d893f327084b05c3ccbf956-1.jpg";
import scoreAGoalImage from "@/img/samantha-gades-iks9hBNKa6E-unsplash.jpg";
import { apiBaseUrl } from "@/lib/api";

const currentAmount = 0;
const goalAmount = 5000000;
const progressPercent = Math.round((currentAmount / goalAmount) * 100);
const paypalNewsletterSignupKey = "paypalNewsletterSignup";

type DonationStatus =
  | {
      type: "idle";
      message: "";
    }
  | {
      type: "success" | "error";
      message: string;
    };

function getStoredPaypalNewsletterSignup() {
  try {
    return window.sessionStorage.getItem(paypalNewsletterSignupKey) === "true";
  } catch {
    return false;
  }
}

function setStoredPaypalNewsletterSignup(
  value: boolean,
  targetWindow: Pick<Window, "sessionStorage"> = window,
) {
  try {
    targetWindow.sessionStorage.setItem(
      paypalNewsletterSignupKey,
      String(value),
    );
  } catch {
    // The PayPal flow can continue if browser storage is unavailable.
  }
}

function clearStoredPaypalNewsletterSignup() {
  try {
    window.sessionStorage.removeItem(paypalNewsletterSignupKey);
  } catch {
    // Nothing to clear when browser storage is unavailable.
  }
}

export function FundraisingContent() {
  const [donationStatus, setDonationStatus] = useState<DonationStatus>({
    type: "idle",
    message: "",
  });
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);
  const [isStartingDonation, setIsStartingDonation] = useState(false);
  const [isConfirmingDonation, setIsConfirmingDonation] = useState(false);
  const [isNewsletterSignupChecked, setIsNewsletterSignupChecked] =
    useState(false);
  const hasHandledPaypalReturn = useRef(false);

  useEffect(() => {
    if (hasHandledPaypalReturn.current) {
      return;
    }

    const params = new URLSearchParams(window.location.search);
    const paypalStatus = params.get("paypal");
    const orderId = params.get("token");
    const subscribeToNewsletter =
      params.get("newsletterSignup") === "true" ||
      getStoredPaypalNewsletterSignup();

    if (paypalStatus === "cancel") {
      hasHandledPaypalReturn.current = true;
      clearStoredPaypalNewsletterSignup();
      window.history.replaceState({}, "", window.location.pathname);
      window.setTimeout(() => {
        setDonationStatus({
          type: "error",
          message: "PayPal checkout was canceled.",
        });
      }, 0);
      return;
    }

    if (paypalStatus !== "return" || !orderId) {
      return;
    }

    hasHandledPaypalReturn.current = true;
    const paypalOrderId = orderId;

    async function confirmDonation() {
      setIsConfirmingDonation(true);
      setDonationStatus({
        type: "idle",
        message: "",
      });

      try {
        const response = await fetch(
          `${apiBaseUrl}/paypal/orders/${encodeURIComponent(
            paypalOrderId,
          )}/capture`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              subscribeToNewsletter,
            }),
          },
        );

        if (!response.ok) {
          const message =
            response.status === 409
              ? "That person has already donated, please try again."
              : "PayPal donation could not be confirmed. Please try again.";

          setDonationStatus({
            type: "error",
            message,
          });
          return;
        }

        setDonationStatus({
          type: "success",
          message: "Thank you. Your PayPal donation was completed.",
        });
      } catch {
        setDonationStatus({
          type: "error",
          message: "PayPal donation could not be confirmed. Please try again.",
        });
      } finally {
        setIsConfirmingDonation(false);
        clearStoredPaypalNewsletterSignup();
        window.history.replaceState({}, "", window.location.pathname);
      }
    }

    void confirmDonation();
  }, []);

  function handleSupportClick() {
    setIsNewsletterSignupChecked(false);
    setIsDonationModalOpen(true);
  }

  async function handleConfirmDonation() {
    const subscribeToNewsletter = isNewsletterSignupChecked;
    const paypalWindow = window.open("", "_blank");

    if (!paypalWindow) {
      setDonationStatus({
        type: "error",
        message: "Please allow pop-ups so PayPal can open in a new tab.",
      });
      return;
    }

    setStoredPaypalNewsletterSignup(subscribeToNewsletter);
    setStoredPaypalNewsletterSignup(subscribeToNewsletter, paypalWindow);
    setIsDonationModalOpen(false);
    setIsStartingDonation(true);
    setDonationStatus({
      type: "idle",
      message: "",
    });

    try {
      const response = await fetch(`${apiBaseUrl}/paypal/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subscribeToNewsletter,
        }),
      });
      const data = (await response.json().catch(() => null)) as
        | {
            approvalUrl?: string;
          }
        | null;

      if (!response.ok || !data?.approvalUrl) {
        paypalWindow.close();
        setDonationStatus({
          type: "error",
          message: "PayPal checkout could not be started. Please try again.",
        });
        return;
      }

      paypalWindow.location.href = data.approvalUrl;
    } catch {
      paypalWindow.close();
      setDonationStatus({
        type: "error",
        message: "PayPal checkout could not be started. Please try again.",
      });
    } finally {
      setIsStartingDonation(false);
    }
  }

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
            Please check back soon for details on how to support this initiative.
          </p>
          {/* <p>
            Has someone in your family been affected by cancer, Parkinson&rsquo;s, or heart disease?
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
            disabled={isStartingDonation || isConfirmingDonation}
          >
            {isStartingDonation ? "Opening PayPal..." : "Support Here"}
          </Button>
          {isConfirmingDonation ? (
            <p className="form-status" role="status">
              Confirming your PayPal donation...
            </p>
          ) : null}
          {donationStatus.type !== "idle" ? (
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
        onHide={() => setIsDonationModalOpen(false)}
        centered
        aria-labelledby="donation-newsletter-modal-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="donation-newsletter-modal-title">
            Score a Goal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="donation-modal__intro">
            By demonstrating your support for The Silver Guardian, you are
            helping to make sure that the concept of a state of the art, kid
            friendly, ice hockey themed hospital facility becomes a reality to
            provide hope and healing, especially to brave children battling
            cancer and heart disease. Thank you for supporting the cause!
          </p>
          <label className="donation-modal__newsletter-opt-in">
            <input
              type="checkbox"
              checked={isNewsletterSignupChecked}
              onChange={(event) =>
                setIsNewsletterSignupChecked(event.target.checked)
              }
            />
            <span>
              Please check this box if you would like to subscribe to our
              monthly newsletter for updates on The Silver Guardian&apos;s
              progress:
            </span>
          </label>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="site-button site-button--secondary"
            onClick={() => setIsDonationModalOpen(false)}
            disabled={isStartingDonation}
          >
            Cancel
          </Button>
          <Button
            className="site-button site-button--primary"
            onClick={handleConfirmDonation}
            disabled={isStartingDonation}
          >
            {isStartingDonation ? "Opening PayPal..." : "Continue to PayPal"}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
