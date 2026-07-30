import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { BENEVOLAT_CATEGORIES, BENEVOLAT_ITEMS } from "@/ui/data/benevolat";
import styles from "./page.module.css";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return BENEVOLAT_CATEGORIES.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const category = BENEVOLAT_CATEGORIES.find((c) => c.slug === params.slug);
  return { title: category ? category.label : "Bénévolat" };
}

export default function BenevolatCategoryPage({ params }: Props) {
  const category = BENEVOLAT_CATEGORIES.find((c) => c.slug === params.slug);

  if (!category) {
    notFound();
  }

  const items = BENEVOLAT_ITEMS[params.slug] ?? [];

  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <Link href="/#benevolat" className={styles.back}>
          ← Retour au bénévolat
        </Link>

        <span className={styles.eyebrow}>Bénévolat</span>
        <h1 className={styles.title}>{category!.label}</h1>
        <p className={styles.description}>{category!.description}</p>

        {items.length === 0 ? (
          <p className={styles.empty}>
            Aucun contenu pour l&apos;instant. Revenez bientôt !
          </p>
        ) : (
          <div className={styles.grid}>
            {items.map((item) => (
              <article key={item.id} className={styles.card}>
                <div className={styles.photoWrap}>
                  {item.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={item.image}
                      alt={item.title}
                      className={styles.photo}
                    />
                  ) : (
                    <PlaceholderIcon />
                  )}
                </div>
                <p className={styles.cardTitle}>{item.title}</p>
                <p className={styles.cardDesc}>{item.description}</p>
                <a
                  href={item.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.fbLink}
                >
                  Voir la publication Facebook →
                </a>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

function PlaceholderIcon() {
  return (
    <svg viewBox="0 0 24 24" width="34" height="34" fill="none">
      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M4 20c1.5-4 5-6 8-6s6.5 2 8 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}