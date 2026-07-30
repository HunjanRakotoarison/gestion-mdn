import Link from "next/link";
import styles from "./Benevolat.module.css";
import {
  BENEVOLAT_CATEGORIES,
  TOTAL_BENEVOLES,
  BENEVOLES_DEPUIS,
  type BenevolatCategory,
} from "@/ui/data/benevolat";

export default function Benevolat() {
  return (
    <section className={styles.benevolat} id="benevolat">
      <div className={styles.inner}>
        <span className={styles.eyebrow}>Bénévolat</span>
        <h2 className={styles.title}>Une communauté qui s&apos;engage</h2>

        <p className={styles.description}>
          Nos bénévoles donnent de leur temps pour former, accompagner et
          partager leur passion du numérique avec les jeunes Malagasy.
          Découvrez leur engagement à travers les moments qu&apos;ils ont
          choisi de partager.
        </p>

        <div className={styles.stat}>
          <span className={styles.statNumber}>{TOTAL_BENEVOLES}+</span>
          <span className={styles.statLabel}>
            bénévoles engagés depuis {BENEVOLES_DEPUIS}
          </span>
        </div>

        <div className={styles.grid}>
          {BENEVOLAT_CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/benevolat/${cat.slug}`}
              className={styles.card}
            >
              <span className={styles.icon}>
                <CategoryIcon slug={cat.slug} />
              </span>
              <p className={styles.cardTitle}>{cat.label}</p>
              <p className={styles.cardDesc}>{cat.description}</p>
              <span className={styles.cardLink}>Voir plus →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryIcon({ slug }: { slug: BenevolatCategory["slug"] }) {
  switch (slug) {
    case "temoignages":
      return (
        <svg viewBox="0 0 24 24" width="26" height="26" fill="none">
          <path
            d="M4 5h16v11H9l-4 4V5z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M8 10h8M8 13h5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "en-action":
      return (
        <svg viewBox="0 0 24 24" width="26" height="26" fill="none">
          <rect
            x="3"
            y="6"
            width="18"
            height="13"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M8 6l1.6-2.5h4.8L16 6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="12.5" r="3.2" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case "partage":
      return (
        <svg viewBox="0 0 24 24" width="26" height="26" fill="none">
          <circle cx="7" cy="12" r="2.6" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="17" cy="6" r="2.6" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="17" cy="18" r="2.6" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M9.3 10.8L14.7 7.4M9.3 13.2l5.4 3.4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "remerciements":
      return (
        <svg viewBox="0 0 24 24" width="26" height="26" fill="none">
          <path
            d="M12 20s-7-4.4-9-9.2C1.6 6.9 4 4 7.2 4c1.9 0 3.4 1 4.8 2.7C13.4 5 14.9 4 16.8 4 20 4 22.4 6.9 21 10.8 19 15.6 12 20 12 20z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "hors-mdn":
    default:
      return (
        <svg viewBox="0 0 24 24" width="26" height="26" fill="none">
          <path
            d="M12 21s7-6.1 7-11.5A7 7 0 105 9.5C5 14.9 12 21 12 21z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="9.5" r="2.4" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
  }
}