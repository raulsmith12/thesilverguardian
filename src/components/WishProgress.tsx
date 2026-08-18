"use client";

import { useEffect, useState } from "react";
import { apiBaseUrl } from "@/lib/api";

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

export function WishSignatureCount({ city, locale = "en" }: { city: string; locale?: "en" | "fr-CA" }) {
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

  const countLabel = count.toLocaleString(isFrench ? "fr-CA" : "en-US");

  return (
    <p className="wish-signature-count" aria-busy={isLoading} aria-live="polite">
      {failed
        ? (isFrench ? "Signatures indisponibles" : "Signatures unavailable")
        : `${countLabel} signatures`}
    </p>
  );
}
