import Link from "next/link";
import { notFound } from "next/navigation";
import { BENEVOLAT_CATEGORIES } from "@/ui/data/benevolat";
import ContributorGrid from "./ContributorGrid";
import styles from "./BenevolatDetail.module.css";

export function generateStaticParams() {
  return BENEVOLAT_CATEGORIES.map((cat) => ({ slug: cat.slug }));
}

export default async function BenevolatCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = BENEVOLAT_CATEGORIES.find((c) => c.slug === slug);
  if (!category) notFound();

  return (
    <section className={styles.page}>
      <div className={styles.inner}>
        <Link href="/#benevolat" className={styles.back}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none">
            <path
              d="M19 12H5M11 6l-6 6 6 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Retour
        </Link>

        <span className={styles.eyebrow}>Bénévolat</span>
        <h1 className={styles.title}>{category.label}</h1>
        <p className={styles.description}>{category.description}</p>

        {category.contributors.length > 0 ? (
          <ContributorGrid contributors={category.contributors} />
        ) : (
          <p className={styles.empty}>
            Aucune publication pour le moment dans cette catégorie.
          </p>
        )}
      </div>
    </section>
  );
}