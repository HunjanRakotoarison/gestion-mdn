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
}

const activites: ActiviteTuile[] = [
  {
    slug: "inclusion-numerique",
    titre: "Inclusion Numérique",
    resume: "EPP & enfants à besoins spécifiques",
    icone: "inclusion",
    couleurDebut: "#14B8A6",
    couleurFin: "#0D9488",
  },
  {
    slug: "formation",
    titre: "Formation",
    resume: "Ateliers et sessions numériques",
    icone: "formation",
    couleurDebut: "#F59E0B",
    couleurFin: "#D97706",
  },
  {
    slug: "utilisateurs",
    titre: "Utilisateurs",
    resume: "Suivi et accompagnement quotidien",
    icone: "utilisateurs",
    couleurDebut: "#F97316",
    couleurFin: "#EA580C",
  },
  {
    slug: "autres-activites",
    titre: "Autres activités",
    resume: "Interventions hors de la MDN",
    icone: "territoire",
    couleurDebut: "#6366F1",
    couleurFin: "#4F46E5",
  },
];

function Icone({ type }: { type: ActiviteTuile["icone"] }) {
  const commun = {
    width: 30,
    height: 30,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
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

export default function Activites() {
  return (
    <section id="activites" className={`${display.variable} ${styles.section}`}>
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
                } as React.CSSProperties
              }
            >
              <div className={styles.motif} />
              <div className={styles.icone}>
                <Icone type={a.icone} />
              </div>
              <div className={styles.contenu}>
                <h3 className={styles.tuileTitre}>{a.titre}</h3>
                <p className={styles.tuileResume}>{a.resume}</p>
              </div>
              <span className={styles.fleche}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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