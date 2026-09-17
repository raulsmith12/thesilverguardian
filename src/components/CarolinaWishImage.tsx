"use client";

import Image from "next/image";
import { useState } from "react";
import northCarolinaImage from "@/img/F949AC77-362D-4146-B910-FB3BADA12DE1.jpeg";
import southCarolinaImage from "@/img/1607A2FB-52CF-4A26-BD20-B3289542BAE4.jpeg";

export function CarolinaWishImage() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <button
      className="wish-skyline-card__image-swap"
      type="button"
      aria-label={`Show ${isFlipped ? "North" : "South"} Carolina image`}
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
        setIsFlipped((flipped) => !flipped);
      }}
    >
      <span
        className={`wish-skyline-card__image-flipper${isFlipped ? " wish-skyline-card__image-flipper--flipped" : ""}`}
      >
        <Image
          className="wish-skyline-card__image wish-skyline-card__image--front"
          src={northCarolinaImage}
          alt="North Carolina skyline at night, labeled #32wishes #north #carolina"
        />
        <Image
          className="wish-skyline-card__image wish-skyline-card__image--back"
          src={southCarolinaImage}
          alt="South Carolina skyline at sunset, labeled #32wishes #south #carolina"
        />
      </span>
    </button>
  );
}
