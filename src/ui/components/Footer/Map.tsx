import Link from "next/link";
import styles from "./Map.module.css";

export default function Map() {
  return (
    <section className={styles.mapSection} aria-labelledby="map-title">
      <div className={styles.mapCard}>
        <div className={styles.mapIntro}>
          <span className={styles.eyebrow}>Nous trouver</span>
          <h2 id="map-title">Venez nous rendre visite</h2>
          <p>La Maison du Numérique vous accueille à Antananarivo.</p>
          <Link
            href="https://www.openstreetmap.org/?mlat=-18.91&mlon=47.52#map=14/-18.91/47.52"
            target="_blank"
            rel="noreferrer"
            className={styles.directionLink}
          >
            Ouvrir l’itinéraire <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <div className={styles.mapFrame}>
        <iframe
          title="Carte de localisation de la Maison du Numérique à Antananarivo"
          src="https://www.openstreetmap.org/export/embed.html?bbox=47.47%2C-18.96%2C47.58%2C-18.85&layer=mapnik&marker=-18.91%2C47.52"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className={styles.mapPin} aria-hidden="true">
          <span />
        </div>
        <div className={styles.mapLabel}>
          <span className={styles.pinIcon} aria-hidden="true">⌖</span>
          <span>Antananarivo, Madagascar</span>
        </div>
        </div>
      </div>
    </section>
  );
}
