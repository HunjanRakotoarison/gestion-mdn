import Link from "next/link";
import { Space_Grotesk } from "next/font/google";
import styles from "./Activites.module.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-display",
});

interface ActiviteTuile {
  slug: string;
  titre: string;
  resume: string;
  icone: "inclusion" | "formation" | "utilisateurs" | "territoire";
  couleurDebut: string;
  couleurFin: string;
  iconeDebut: string;
  iconeFin: string;
}

const activites: ActiviteTuile[] = [
  {
    slug: "inclusion-numerique",
    titre: "Inclusion Numérique",
    resume: "EPP & enfants à besoins spécifiques",
    icone: "inclusion",
    couleurDebut: "#1E56B0",
    couleurFin: "#0F2D5C",
    iconeDebut: "#2DD4BF",
    iconeFin: "#0D9488",
  },
  {
    slug: "formation",
    titre: "Formation",
    resume: "Ateliers et sessions numériques",
    icone: "formation",
    couleurDebut: "#1AAE93",
    couleurFin: "#0B6B57",
    iconeDebut: "#5EEAD4",
    iconeFin: "#22B8A0",
  },
  {
    slug: "utilisateurs",
    titre: "Utilisateurs",
    resume: "Suivi et accompagnement quotidien",
    icone: "utilisateurs",
    couleurDebut: "#1857B8",
    couleurFin: "#0D2F63",
    iconeDebut: "#60A5FA",
    iconeFin: "#2563EB",
  },
  {
    slug: "autres-activites",
    titre: "Autres activités",
    resume: "Interventions hors de la MDN",
    icone: "territoire",
    couleurDebut: "#4C4FD9",
    couleurFin: "#2E2A85",
    iconeDebut: "#A78BFA",
    iconeFin: "#6D5AE0",
  },
];

function Icone({ type }: { type: ActiviteTuile["icone"] }) {
  const commun = {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (type) {
    case "inclusion":
      return (
        <svg {...commun}>
          <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
          <path d="M2 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
          <path d="M16 8.5c1.4.4 2.5 1.6 2.5 3.2 0 1.8-1.4 3.2-3 3.5" />
          <path d="M14 20c0-2.4 1.6-4.4 3.8-5" />
        </svg>
      );
    case "formation":
      return (
        <svg {...commun}>
          <path d="M2 8.5 12 4l10 4.5-10 4.5-10-4.5Z" />
          <path d="M6 10.7V16c0 1.7 2.7 3 6 3s6-1.3 6-3v-5.3" />
          <path d="M22 8.5v6" />
        </svg>
      );
    case "utilisateurs":
      return (
        <svg {...commun}>
          <circle cx="12" cy="8" r="3.5" />
          <path d="M5 20c0-3.9 3.1-7 7-7s7 3.1 7 7" />
        </svg>
      );
    case "territoire":
      return (
        <svg {...commun}>
          <path d="M12 21s7-6.1 7-11.5S16.4 2 12 2 5 4.6 5 9.5 12 21 12 21Z" />
          <circle cx="12" cy="9.5" r="2.5" />
        </svg>
      );
  }
}

/** Grand motif en filigrane, propre à chaque activité, posé en fond de tuile. */
function Motif({ type }: { type: ActiviteTuile["icone"] }) {
  switch (type) {
    case "inclusion":
      // trame façon "circuit" : noeuds reliés par des lignes à angle droit
      return (
        <svg className={styles.motifSvg} viewBox="0 0 220 160" fill="none">
          <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
            <path d="M40 20 L40 60 L90 60 L90 100" />
            <path d="M120 10 L120 45 L170 45 L170 90 L200 90" />
            <path d="M60 110 L110 110 L110 150" />
          </g>
          <g fill="currentColor">
            <circle cx="40" cy="20" r="4" />
            <circle cx="90" cy="60" r="4" />
            <circle cx="90" cy="100" r="4" />
            <circle cx="120" cy="10" r="4" />
            <circle cx="170" cy="45" r="4" />
            <circle cx="200" cy="90" r="4" />
            <circle cx="60" cy="110" r="4" />
            <circle cx="110" cy="150" r="4" />
          </g>
        </svg>
      );
    case "formation":
      // grand chapeau de diplômé
      return (
        <svg className={styles.motifSvg} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1">
          <path d="M2 8.5 12 4l10 4.5-10 4.5-10-4.5Z" strokeLinejoin="round" />
          <path d="M6 10.7V16c0 1.7 2.7 3 6 3s6-1.3 6-3v-5.3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M22 8.5v6" strokeLinecap="round" />
        </svg>
      );
    case "utilisateurs":
      // grande silhouette entourée de deux plus petites
      return (
        <svg className={styles.motifSvg} viewBox="0 0 220 160" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="110" cy="45" r="22" />
          <path d="M70 145c0-22 18-40 40-40s40 18 40 40" />
          <circle cx="35" cy="70" r="14" />
          <path d="M5 145c0-16 13-29 30-29s30 13 30 29" />
          <circle cx="185" cy="70" r="14" />
          <path d="M155 145c0-16 13-29 30-29s30 13 30 29" />
        </svg>
      );
    case "territoire":
      // réseau de points, façon carte
      return (
        <svg className={styles.motifSvg} viewBox="0 0 220 160" fill="none">
          <g stroke="currentColor" strokeWidth="1.2">
            <path d="M30 130 L90 90 L150 120 L200 60" />
            <path d="M90 90 L120 30" />
            <path d="M150 120 L170 150" />
          </g>
          <g fill="currentColor">
            <circle cx="30" cy="130" r="3.5" />
            <circle cx="90" cy="90" r="3.5" />
            <circle cx="150" cy="120" r="3.5" />
            <circle cx="200" cy="60" r="3.5" />
            <circle cx="120" cy="30" r="3.5" />
            <circle cx="170" cy="150" r="3.5" />
          </g>
        </svg>
      );
  }
}

export default function Activites() {
  return (
    <section id="activites" className={`${display.variable} ${styles.section}`}>
      <div className={styles.bgDecor} aria-hidden="true">
        <svg viewBox="0 0 260 220" fill="none">
          <g stroke="currentColor" strokeWidth="1.2">
            <path d="M180 10 L180 60 L230 60 L230 110" />
            <path d="M150 90 L150 130 L200 130" />
          </g>
          <g fill="currentColor">
            <circle cx="180" cy="10" r="3" />
            <circle cx="180" cy="60" r="3" />
            <circle cx="230" cy="60" r="3" />
            <circle cx="230" cy="110" r="3" />
            <circle cx="150" cy="90" r="3" />
            <circle cx="150" cy="130" r="3" />
            <circle cx="200" cy="130" r="3" />
          </g>
        </svg>
      </div>

      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Notre mission</span>
          <h2 className={styles.titre}>Quatre piliers, une même vocation.</h2>
          <p className={styles.sousTitre}>
            Cliquez sur une activité pour découvrir nos actions en détail :
            vidéos, photos et témoignages.
          </p>
        </div>

        <div className={styles.grille}>
          {activites.map((a) => (
            <Link
              key={a.slug}
              href={`/activites/${a.slug}`}
              className={styles.tuile}
              style={
                {
                  "--c1": a.couleurDebut,
                  "--c2": a.couleurFin,
                  "--ci1": a.iconeDebut,
                  "--ci2": a.iconeFin,
                } as React.CSSProperties
              }
            >
              <div className={styles.motif}>
                <Motif type={a.icone} />
              </div>

              <div className={styles.icone}>
                <Icone type={a.icone} />
              </div>

              <div className={styles.contenu}>
                <h3 className={styles.tuileTitre}>{a.titre}</h3>
                <p className={styles.tuileResume}>{a.resume}</p>
              </div>

              <span className={styles.fleche}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}