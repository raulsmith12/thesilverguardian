"use client";

import { useEffect, useState } from "react";
import { apiBaseUrl } from "@/lib/api";

const SIGNATURE_GOAL = 31_250;
type Counts = Record<string, number>;
let countsRequest: Promise<Counts> | undefined;

function loadCounts() {
  countsRequest ??= fetch(`${apiBaseUrl}/petition/wish-progress`)
    .then((response) => {
      if (!response.ok) throw new Error("Unable to load wish progress");
      return response.json() as Promise<{ counts: Counts }>;
    })
    .then((data) => data.counts)
    .catch((error) => {
      countsRequest = undefined;
      throw error;
    });
  return countsRequest;
}

export function WishProgress({ city, locale = "en" }: { city: string; locale?: "en" | "fr-CA" }) {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [failed, setFailed] = useState(false);
  const isFrench = locale === "fr-CA";

  useEffect(() => {
    let active = true;
    loadCounts().then((counts) => {
      if (active) {
        setCount(Math.max(0, counts[city] ?? 0));
        setIsLoading(false);
      }
    }).catch(() => {
      if (active) {
        setFailed(true);
        setIsLoading(false);
      }
    });
    return () => { active = false; };
  }, [city]);

  const percentage = Math.min(100, (count / SIGNATURE_GOAL) * 100);
  const countLabel = count.toLocaleString(isFrench ? "fr-CA" : "en-US");
  const goalLabel = SIGNATURE_GOAL.toLocaleString(isFrench ? "fr-CA" : "en-US");

  return (
    <div className="wish-progress" aria-busy={isLoading}>
      <div className="wish-progress__labels">
        <span>{failed ? (isFrench ? "Progrès indisponible" : "Progress unavailable") : `${countLabel} ${isFrench ? "signatures" : "signatures"}`}</span>
        <span>{isFrench ? `Objectif : ${goalLabel}` : `Goal: ${goalLabel}`}</span>
      </div>
      <div
        className="wish-progress__track"
        role="progressbar"
        aria-label={isFrench ? `Progression des signatures pour ${city}` : `${city} signature progress`}
        aria-valuemin={0}
        aria-valuemax={SIGNATURE_GOAL}
        aria-valuenow={count}
      >
        <span style={{ width: `${percentage}%` }} />
      </div>
    </div>
  );
}
