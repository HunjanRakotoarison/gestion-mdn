"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import "./Slides.css";

type Slide = {
  image: string;
  alt: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
};

// Remplace ces chemins par tes propres images dans /public/assets/images/slides/
const SLIDES: Slide[] = [
  {
    image: "/assets/images/Slide1.png",
    alt: "Formation informatique pour les jeunes",
    eyebrow: "Notre mission",
    title: "Réduire la fracture numérique",
    subtitle: "à Madagascar, un pas à la fois",
  },
  {
    image: "/assets/images/Slide2.jpg",
    alt: "Salle informatique de la Maison du Numérique",
    eyebrow: "Accessibilité",
    title: "Un accès gratuit aux outils numériques",
    subtitle: "pour les populations défavorisées",
  },
  {
    image: "/assets/images/Slide3.jpg",
    alt: "Étudiants pendant un atelier",
    eyebrow: "Impact",
    title: "Plus de 5000 jeunes formés",
    subtitle: "depuis notre ouverture en 2023",
  },
];

const AUTO_PLAY_MS = 6000;

export default function Slides() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progressKey, setProgressKey] = useState(0);

  const touchStartX = useRef<number | null>(null);
  const total = SLIDES.length;

  const goTo = useCallback((i: number) => {
    setIndex((i + total) % total);
    setProgressKey((k) => k + 1);
  }, [total]);

  const next = useCallback(() => goTo(index + 1), [index, goTo]);
  const prev = useCallback(() => goTo(index - 1), [index, goTo]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, AUTO_PLAY_MS);
    return () => clearInterval(timer);
  }, [next, isPaused]);

  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }

  function handleTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 40) {
      if (delta < 0) next();
      else prev();
    }
    touchStartX.current = null;
  }

  return (
    <section
      className="slide-section"
      aria-label="Diaporama"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="slide-viewport">
        {SLIDES.map((slide, i) => (
          <div
            key={slide.image}
            className={`slide-item ${i === index ? "slide-item-active" : ""}`}
            aria-hidden={i !== index}
          >
            <div className="slide-image-wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={slide.image} alt={slide.alt} className="slide-image" />
            </div>
            <div className="slide-overlay" />
            <div className="slide-vignette" />

            <div className="slide-caption">
              {slide.eyebrow && (
                <span className="slide-caption-eyebrow">
                  <span className="slide-eyebrow-dash" />
                  {slide.eyebrow}
                </span>
              )}
              {slide.title && (
                <h2 className="slide-caption-title">{slide.title}</h2>
              )}
              {slide.subtitle && (
                <p className="slide-caption-subtitle">{slide.subtitle}</p>
              )}
            </div>
          </div>
        ))}

        <button
          type="button"
          className="slide-arrow slide-arrow-left"
          onClick={prev}
          aria-label="Diapositive précédente"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          type="button"
          className="slide-arrow slide-arrow-right"
          onClick={next}
          aria-label="Diapositive suivante"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="slide-footer">
          <span className="slide-counter">
            <span className="slide-counter-current"></span>
            {/* <span className="slide-counter-sep" /> */}
            <span className="slide-counter-total"></span>
          </span>

          <div className="slide-dots">
            {SLIDES.map((slide, i) => (
              <button
                key={slide.image}
                type="button"
                className={`slide-dot ${i === index ? "slide-dot-active" : ""}`}
                onClick={() => goTo(i)}
                aria-label={`Aller à la diapositive ${i + 1}`}
              >
                {i === index && !isPaused && (
                  <span
                    key={progressKey}
                    className="slide-dot-progress"
                    style={{ animationDuration: `${AUTO_PLAY_MS}ms` }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}