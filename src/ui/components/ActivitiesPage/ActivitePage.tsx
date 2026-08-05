import Link from "next/link";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import styles from "./ActivitePage.module.css";

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

export interface ActiviteSection {
  titre: string;
  description: string;
  /** URL d'intégration vidéo (YouTube embed, etc.) — laisser vide pour un placeholder */
  videoUrl?: string;
  /** Chemins ou URLs des photos */
  photos: string[];
}

interface ActivitePageProps {
  tag: string;
  titre: string;
  intro: string;
  couleurClair: string;
  couleurSombre: string;
  sections: ActiviteSection[];
}

export default function ActivitePage({
  tag,
  titre,
  intro,
  couleurClair,
  couleurSombre,
  sections,
}: ActivitePageProps) {
  return (
    <main
      className={`${display.variable} ${mono.variable} ${styles.page}`}
      style={
        {
          "--c-light": couleurClair,
          "--c-dark": couleurSombre,
        } as React.CSSProperties
      }
    >
      <div className={styles.dotGrid} />

      <div className={styles.inner}>
        <Link href="/#activites" className={styles.retour}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M11 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Retour aux activités
        </Link>

        <header className={styles.header}>
          <span className={styles.tag} style={{ fontFamily: "var(--font-mono)" }}>
            {tag}
          </span>
          <h1 className={styles.titre} style={{ fontFamily: "var(--font-display)" }}>
            {titre}
          </h1>
          <p className={styles.intro}>{intro}</p>
        </header>

        <div className={styles.sections}>
          {sections.map((section) => (
            <section key={section.titre} className={styles.section}>
              <h2 className={styles.sectionTitre} style={{ fontFamily: "var(--font-display)" }}>
                {section.titre}
              </h2>
              <p className={styles.sectionDescription}>{section.description}</p>

              <div className={styles.videoWrapper}>
                {section.videoUrl ? (
                  <iframe
                    src={section.videoUrl}
                    title={section.titre}
                    className={styles.video}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div className={styles.videoPlaceholder}>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M10 8l6 4-6 4V8z" fill="currentColor" stroke="none" />
                    </svg>
                    <span>Vidéo à venir</span>
                  </div>
                )}
              </div>

              <div className={styles.photoGrid}>
                {section.photos.map((photo, i) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={i}
                    src={photo}
                    alt={`${section.titre} — photo ${i + 1}`}
                    className={styles.photo}
                    loading="lazy"
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
