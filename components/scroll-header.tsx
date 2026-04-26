"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type ScrollHeaderProps = {
  heroId: string;
  cvHref: string;
};

export const ScrollHeader = ({ heroId, cvHref }: ScrollHeaderProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById(heroId);

    if (!hero) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(!entry.isIntersecting);
      },
      {
        threshold: 0.15,
      },
    );

    observer.observe(hero);

    return () => {
      observer.disconnect();
    };
  }, [heroId]);

  return (
    <div
      aria-hidden={!isVisible}
      className={`scroll-header ${
        isVisible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-4 opacity-0"
      }`}
    >
      <div className="scroll-header__inner">
        <div className="flex items-center gap-3 min-w-0">
          <Image
            className="h-11 w-11 rounded-full border border-primary/60 object-cover shadow-[0_0_20px_rgba(13,148,136,0.22)]"
            src="/images/avatar.jpg"
            alt="Henry Glez pictured in front of a mosaic wall on a sunny day"
            width={44}
            height={44}
          />
          <div className="min-w-0">
            <p className="truncate text-sm font-medium uppercase tracking-[0.22em] text-primary-light/80">
              Henry Glez
            </p>
            {/* <p className="truncate text-base font-semibold text-white">
              Henry Glez
            </p> */}
          </div>
        </div>

        <Link
          className="mouse-reveal-btn inline-flex shrink-0 items-center rounded-full px-4 py-2 text-sm font-medium text-white shadow-lg shadow-primary/20 "
          href={cvHref}
          data-mouse-reveal
        >
          Download CV
        </Link>
      </div>
    </div>
  );
};
