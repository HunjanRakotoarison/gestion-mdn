"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./BenevolatDetail.module.css";
import type { BenevolatContributor } from "@/ui/data/benevolat";

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
      <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.25-1.5 1.55-1.5H16.7V3.7C16.4 3.65 15.4 3.55 14.25 3.55c-2.4 0-4.05 1.45-4.05 4.15V9.9H7.5V13h2.7v8h3.3z" />
    </svg>
  );
}

export default function ContributorGrid({
  contributors,
}: {
  contributors: BenevolatContributor[];
}) {
  const [selected, setSelected] = useState<BenevolatContributor | null>(null);

  return (
    <>
      <div className={styles.contributorGrid}>
        {contributors.map((c) => {
          const isVideo = c.photo.toLowerCase().endsWith(".mp4");

          return (
            <div key={c.name} className={styles.contributorCard}>
              <button
                type="button"
                className={styles.contributorPhotoWrap}
                onClick={() => setSelected(c)}
                aria-label={`Voir le témoignage complet de ${c.name}`}
              >
                {isVideo ? (
                  <video
                    src={c.photo}
                    className={styles.contributorPhoto}
                    muted
                    loop
                    playsInline
                    autoPlay
                  />
                ) : (
                  <Image
                    src={c.photo}
                    alt={c.name}
                    fill
                    className={styles.contributorPhoto}
                    sizes="(max-width: 600px) 25vw, (max-width: 860px) 20vw, 120px"
                  />
                )}
              </button>

              <p className={styles.contributorName}>{c.name}</p>
              <span className={styles.contributorRole}>{c.role}</span>

              <p className={styles.contributorTeaser}>&ldquo;{c.quote}&rdquo;</p>

              <button
                type="button"
                className={styles.readMore}
                onClick={() => setSelected(c)}
              >
                Lire le témoignage complet
              </button>
            </div>
          );
        })}
      </div>

      {selected && (
        <div
          className={styles.lightboxOverlay}
          onClick={() => setSelected(null)}
        >
          <div
            className={styles.lightboxCard}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className={styles.lightboxClose}
              onClick={() => setSelected(null)}
              aria-label="Fermer"
            >
              ×
            </button>

            <div className={styles.lightboxPhotoWrap}>
              {selected.photo.toLowerCase().endsWith(".mp4") ? (
                <video
                  src={selected.photo}
                  className={styles.lightboxPhoto}
                  controls
                  autoPlay
                  playsInline
                />
              ) : (
                <Image
                  src={selected.photo}
                  alt={selected.name}
                  fill
                  className={styles.lightboxPhoto}
                  sizes="(max-width: 640px) 90vw, 480px"
                />
              )}
            </div>

            <p className={styles.lightboxName}>{selected.name}</p>
            <span className={styles.lightboxRole}>{selected.role}</span>
            <p className={styles.lightboxQuote}>&ldquo;{selected.quote}&rdquo;</p>

            <a
              href={selected.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.fbCta}
            >
              <FacebookIcon />
              Voir la publication complète sur Facebook
            </a>
          </div>
        </div>
      )}
    </>
  );
}