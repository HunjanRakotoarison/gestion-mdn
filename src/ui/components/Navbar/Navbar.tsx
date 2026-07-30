"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import styles from "./Navbar.module.css";

const NAV_LINKS = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/a-propos" },
  { label: "Bénévole", href: "/benevole" },
] as const;

const TEMOIGNAGE_OPTIONS = [
  { label: "Bénévole", href: "/temoignage/benevole" },
  { label: "Utilisateur", href: "/temoignage/utilisateur" },
  { label: "Autre", href: "/temoignage/autre" },
] as const;

const TAIL_LINKS = [
  { label: "Activité", href: "/activite" },
  { label: "Contact", href: "/contact" },
] as const;

const LANGUAGES = [
  { code: "FR", label: "Français", flag: "https://flagcdn.com/w40/fr.png" },
  { code: "MG", label: "Malagasy", flag: "https://flagcdn.com/w40/mg.png" },
  { code: "EN", label: "English", flag: "https://flagcdn.com/w40/gb.png" },
] as const;

export default function Navbar() {
  const [temoignageOpen, setTemoignageOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [memberMsgOpen, setMemberMsgOpen] = useState(false);
  const [lang, setLang] = useState<(typeof LANGUAGES)[number]["code"]>("FR");
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { resolvedTheme, setTheme } = useTheme();
  const pathname = usePathname();

  const temoignageRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);

  const currentLang = LANGUAGES.find((l) => l.code === lang) ?? LANGUAGES[0];

  // Evite le mismatch d'hydratation avec next-themes
  useEffect(() => setMounted(true), []);

  // Ferme les menus si on clique en dehors
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      const target = e.target as Node;
      if (temoignageRef.current && !temoignageRef.current.contains(target)) {
        setTemoignageOpen(false);
      }
      if (langRef.current && !langRef.current.contains(target)) {
        setLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Ombre dynamique qui apparaît dès qu'on scrolle, pour donner du relief à la navbar
  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 8);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function toggleTheme() {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ""}`}>
      <div className={styles.inner}>
        {/* Logo (le texte est déjà dans l'image) */}
        <Link href="/" className={styles.logoLink}>
          <Image
            src="/asssets/images/logo.jpg"
            alt="Maison du Numérique"
            width={64}
            height={64}
            className={styles.logo}
            priority
          />
        </Link>

        {/* Liens desktop (centrés) */}
        <div className={styles.links}>
          {NAV_LINKS.map((link) => (
            <NavItem
              key={link.href}
              href={link.href}
              label={link.label}
              active={pathname === link.href}
            />
          ))}

          {/* Dropdown Témoignage */}
          <div className={styles.dropdownWrap} ref={temoignageRef}>
            <button
              onClick={() => setTemoignageOpen((v) => !v)}
              className={styles.navButton}
              aria-expanded={temoignageOpen}
            >
              Témoignage
              <ChevronIcon open={temoignageOpen} />
            </button>

            {temoignageOpen && (
              <div className={styles.dropdown}>
                {TEMOIGNAGE_OPTIONS.map((opt) => (
                  <Link
                    key={opt.href}
                    href={opt.href}
                    onClick={() => setTemoignageOpen(false)}
                    className={styles.dropdownItem}
                  >
                    <span className={styles.dot} />
                    {opt.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {TAIL_LINKS.map((link) => (
            <NavItem
              key={link.href}
              href={link.href}
              label={link.label}
              active={pathname === link.href}
            />
          ))}
        </div>

        {/* Actions à droite */}
        <div className={styles.actions}>
          {/* Sélecteur de langue */}
          <div className={styles.dropdownWrap} ref={langRef}>
            <button
              onClick={() => setLangOpen((v) => !v)}
              className={styles.langButton}
              aria-expanded={langOpen}
              aria-label="Changer de langue"
            >
              <img
                src={currentLang.flag}
                alt={currentLang.label}
                width={20}
                height={15}
                className={styles.flagImg}
              />
              {currentLang.code}
              <ChevronIcon open={langOpen} />
            </button>
            {langOpen && (
              <div className={`${styles.dropdown} ${styles.dropdownRight}`}>
                {LANGUAGES.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setLang(l.code);
                      setLangOpen(false);
                    }}
                    className={`${styles.dropdownItem} ${styles.langItem} ${
                      lang === l.code ? styles.langItemActive : ""
                    }`}
                  >
                    <img
                      src={l.flag}
                      alt={l.label}
                      width={20}
                      height={15}
                      className={styles.flagImg}
                    />
                    {l.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Mode clair / sombre */}
          <button
            onClick={toggleTheme}
            className={styles.iconButton}
            aria-label="Changer de thème"
          >
            {mounted && resolvedTheme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>

          {/* Connexion : le message membre apparaît juste au survol */}
          <div className={`${styles.dropdownWrap} ${styles.connexionWrap}`}>
            <button className={styles.connexionButton}>Connexion</button>
            <div className={`${styles.memberMsg} ${styles.dropdownRight}`}>
              Espace réservé aux membres de la Maison du Numérique.
            </div>
          </div>

          {/* Bouton menu mobile */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className={styles.burger}
            aria-label="Ouvrir le menu"
            aria-expanded={mobileOpen}
          >
            <span className={mobileOpen ? styles.burgerLine1Open : styles.burgerLine} />
            <span className={mobileOpen ? styles.burgerLine2Open : styles.burgerLine} />
            <span className={mobileOpen ? styles.burgerLine3Open : styles.burgerLine} />
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {mobileOpen && (
        <div className={styles.mobilePanel}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`${styles.mobileLink} ${
                pathname === link.href ? styles.mobileLinkActive : ""
              }`}
            >
              {link.label}
            </Link>
          ))}

          <button
            onClick={() => setTemoignageOpen((v) => !v)}
            className={styles.mobileLink}
          >
            Témoignage
            <ChevronIcon open={temoignageOpen} />
          </button>
          {temoignageOpen && (
            <div className={styles.mobileSubmenu}>
              {TEMOIGNAGE_OPTIONS.map((opt) => (
                <Link
                  key={opt.href}
                  href={opt.href}
                  onClick={() => {
                    setMobileOpen(false);
                    setTemoignageOpen(false);
                  }}
                  className={styles.mobileSubItem}
                >
                  {opt.label}
                </Link>
              ))}
            </div>
          )}

          {TAIL_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`${styles.mobileLink} ${
                pathname === link.href ? styles.mobileLinkActive : ""
              }`}
            >
              {link.label}
            </Link>
          ))}

          <button onClick={toggleTheme} className={styles.mobileLink}>
            {mounted && resolvedTheme === "dark" ? "Mode clair" : "Mode sombre"}
          </button>

          <button
            onClick={() => setMemberMsgOpen((v) => !v)}
            className={styles.connexionButtonMobile}
          >
            Connexion
          </button>
          {memberMsgOpen && (
            <p className={styles.memberMsgMobile}>
              Espace réservé aux membres de la Maison du Numérique.
            </p>
          )}
        </div>
      )}
    </nav>
  );
}

function NavItem({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`${styles.navLink} ${active ? styles.navLinkActive : ""}`}
    >
      {label}
      <span className={styles.underline} />
    </Link>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      style={{
        transition: "transform 0.2s",
        transform: open ? "rotate(180deg)" : "none",
      }}
    >
      <path
        d="M1 3l4 4 4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
      <path
        d="M21 12.5A8.5 8.5 0 1111.5 3a7 7 0 009.5 9.5z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M12 2v2.5M12 19.5V22M22 12h-2.5M4.5 12H2M18.8 5.2l-1.8 1.8M7 17l-1.8 1.8M18.8 18.8L17 17M7 7L5.2 5.2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
