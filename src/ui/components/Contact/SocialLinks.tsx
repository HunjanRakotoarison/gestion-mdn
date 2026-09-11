import { Globe, Image, Mail } from "lucide-react";
import styles from "./SocialLinks.module.css";

const socials = [
  {
    icon: Globe,
    label: "Facebook",
    href: "https://www.facebook.com",
    color: "#1877F2",
  },
  {
    icon: Image,
    label: "Instagram",
    href: "https://www.instagram.com",
    color: "#E4405F",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:contact@maisondunumerique.mg",
    color: "#3fb6b2",
  },
];

export default function SocialLinks() {
  return (
    <div className={styles.section}>
      <h2 className={styles.title}>Réseaux sociaux</h2>
      <div className={styles.links}>
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
            style={{ "--accent": s.color } as React.CSSProperties}
            aria-label={s.label}
          >
            <s.icon size={22} strokeWidth={1.5} />
            <span>{s.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}