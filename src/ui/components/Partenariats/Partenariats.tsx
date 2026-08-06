"use client";

import { useEffect, useRef, useState } from "react";
import { useLayoutEffect } from "react";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./Partenariats.module.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-display",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

interface Partenaire {
  nom: string;
  categorie: string;
  description: string;
  logo: string;
}

const partenaires: Partenaire[] = [
  {
    nom: "YAS",
    categorie: "Connectivité · Partenaire fondateur",
    description:
      "Partenaire clé depuis nos débuts, YAS fournit la connexion Internet Fibre indispensable au fonctionnement de la Maison du Numérique.",
    logo: "/assets/images/Logo/yasImage.png",
  },
  {
    nom: "Spoon Consulting",
    categorie: "Formation & Matériel",
    description:
      "Un soutien matériel et opérationnel précieux, complété par des formations numériques animées directement par leurs experts.",
    logo: "/assets/images/Logo/Spoon.jpg",
  },
  {
    nom: "Sayna Hub",
    categorie: "Espace partagé",
    description:
      "Nos locaux servent d'espace d'accueil pour les Saynautes, autour d'une vision commune : une économie numérique accessible à tous.",
    logo: "/assets/images/Logo/SAYNA.jpg",
  },
  {
    nom: "Madagascar Data Camp (MDC)",
    categorie: "Formation",
    description:
      "Un partenariat essentiel qui permet d'offrir des programmes de formation numérique variés et de qualité à nos utilisateurs.",
    logo: "/assets/images/Logo/MDC.jpg",
  },
  {
    nom: "Groupe Envoi",
    categorie: "Équipement",
    description:
      "La fourniture d'ordinateurs portables permet à nos utilisateurs d'accéder aux outils numériques et étend la portée de nos formations.",
    logo: "/assets/images/Logo/envoi.jpg",
  },
  {
    nom: "Google for Education",
    categorie: "Formation & Conseil",
    description:
      "Conseils précieux sur la gestion de notre espace, accès à des formations Google gratuites, et accompagnement sur des choix techniques clés.",
    logo: "/assets/images/Logo/google.png",
  },
];

const AUTOPLAY_MS = 5000;

export default function Partenariats() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [direction, setDirection] = useState(1);
  const total = partenaires.length;
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useLayoutEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (isPaused || reducedMotion) return;
    timerRef.current = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % total);
    }, AUTOPLAY_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, reducedMotion, total]);

  const goTo = (i: number) => {
    setDirection(i > index ? 1 : -1);
    setIndex(i);
  };
  const suivant = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % total);
  };
  const precedent = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + total) % total);
  };

  const actif = partenaires[index];

  return (
    <section className={`${display.variable} ${mono.variable} ${styles.section}`}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <div>
            <span className={styles.tag} style={{ fontFamily: "var(--font-mono)" }}>
              Ils nous soutiennent
            </span>
            <h2 className={styles.titre} style={{ fontFamily: "var(--font-display)" }}>
              Nos partenaires
            </h2>
            <p className={styles.intro}>
              Nous ne pourrions pas aider les enfants et étudiants malgaches
              sans le soutien indéfectible de nos partenaires. Merci à toutes
              les organisations qui croient en notre mission.
            </p>
          </div>
          <span className={styles.compteur}>
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
        </div>

        <div
          className={styles.sliderWrapper}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
        >
          <span className={styles.glow} aria-hidden="true" />

          <button
            type="button"
            className={`${styles.arrow} ${styles.arrowLeft}`}
            onClick={precedent}
            aria-label="Partenaire précédent"
          >
            <ChevronLeft size={24} strokeWidth={2} />
          </button>
          <button
            type="button"
            className={`${styles.arrow} ${styles.arrowRight}`}
            onClick={suivant}
            aria-label="Partenaire suivant"
          >
            <ChevronRight size={24} strokeWidth={2} />
          </button>

          <div className={styles.viewport}>
            <div
              className={styles.slideTrack}
              style={{
                transform: `translateX(-${index * 100}%)`,
                transition: reducedMotion ? "none" : "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              {partenaires.map((partenaire, i) => (
                <div key={partenaire.nom} className={styles.slide}>
                  <div className={styles.slideCard}>
                    <div className={styles.logoWrap}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={partenaire.logo}
                        alt={partenaire.nom}
                        className={styles.logo}
                        loading="lazy"
                      />
                    </div>
                    <div className={styles.content}>
                      <span className={styles.badge}>{partenaire.categorie}</span>
                      <h3 className={styles.nom}>{partenaire.nom}</h3>
                      <p className={styles.description}>{partenaire.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.progress}>
            {!reducedMotion && (
              <div
                key={`${index}-${isPaused}`}
                className={`${styles.progressFill} ${
                  isPaused ? styles.progressFillPaused : ""
                }`}
                style={{ ["--autoplay-duration" as string]: `${AUTOPLAY_MS}ms` }}
              />
            )}
          </div>

          <div className={styles.dots}>
            {partenaires.map((partenaire, i) => (
              <button
                key={partenaire.nom}
                type="button"
                className={`${styles.dot} ${i === index ? styles.dotActive : ""}`}
                onClick={() => goTo(i)}
                aria-label={`Aller à ${partenaire.nom}`}
                aria-current={i === index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}