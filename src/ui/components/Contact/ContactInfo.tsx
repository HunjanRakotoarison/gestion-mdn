import { MapPin, Mail, Phone, Clock } from "lucide-react";
import styles from "./ContactInfo.module.css";

const contactDetails = [
  {
    icon: MapPin,
    label: "Adresse",
    value: "Antananarivo, Madagascar",
  },
  {
    icon: Mail,
    label: "Email",
    value: "contact@maisondunumerique.mg",
    href: "mailto:contact@maisondunumerique.mg",
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: "+261 32 00 000 00",
  },
  {
    icon: Clock,
    label: "Horaires",
    value: "Lundi – Vendredi, 8h–17h",
  },
];

export default function ContactInfo() {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Nos coordonnées</h2>
      <ul className={styles.list}>
        {contactDetails.map((item) => (
          <li key={item.label} className={styles.item}>
            <span className={styles.iconWrap}>
              <item.icon size={20} strokeWidth={1.5} />
            </span>
            <div className={styles.text}>
              <span className={styles.label}>{item.label}</span>
              {item.href ? (
                <a href={item.href} className={styles.link}>
                  {item.value}
                </a>
              ) : (
                <span className={styles.value}>{item.value}</span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}