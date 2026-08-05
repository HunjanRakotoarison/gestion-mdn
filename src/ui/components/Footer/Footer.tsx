import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

const footerLinks = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/a-propos" },
  { label: "Devenir bénévole", href: "/benevole" },
  { label: "Activités", href: "/activite" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brandColumn}>
            <Link href="/" className={styles.logoLink} aria-label="Maison du Numérique, accueil">
              <Image
                src="/assets/images/logo.jpg"
                alt="Maison du Numérique"
                width={66}
                height={66}
                className={styles.logo}
              />
            </Link>
            <p className={styles.brandText}>
              Un espace pour apprendre, partager et construire ensemble un avenir numérique inclusif.
            </p>
            <div className={styles.socials} aria-label="Réseaux sociaux">
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className={styles.socialLink} aria-label="Facebook">f</a>
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className={styles.socialLink} aria-label="Instagram"><InstagramIcon /></a>
              <a href="mailto:contact@maisondunumerique.mg" className={styles.socialLink} aria-label="Envoyer un email"><MailIcon /></a>
            </div>
          </div>

          <div className={styles.linkColumn}>
            <p className={styles.columnTitle}>Navigation</p>
            <nav className={styles.links} aria-label="Navigation du pied de page">
              {footerLinks.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
            </nav>
          </div>

          <div className={styles.contactColumn}>
            <p className={styles.columnTitle}>Restons connectés</p>
            <p className={styles.contactText}>Une question, une idée ou envie de nous rejoindre ? Écrivez-nous.</p>
            <a className={styles.email} href="mailto:contact@maisondunumerique.mg">contact@maisondunumerique.mg <span aria-hidden="true">↗</span></a>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} Maison du Numérique. Tous droits réservés.</p>
          <div className={styles.legalLinks}>
            <Link href="/mentions-legales">Mentions légales</Link>
            <span aria-hidden="true">·</span>
            <Link href="/confidentialite">Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function InstagramIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" className={styles.iconFill} /></svg>;
}

function MailIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></svg>;
}
