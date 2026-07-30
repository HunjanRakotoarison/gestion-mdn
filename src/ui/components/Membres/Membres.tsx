import styles from "./Membres.module.css";

type Member = {
  name: string;
  role: string;
  photo?: string;
};


// (photo au format /assets/images/team/....jpg dans /public par exemple)
const TEAM: Member[] = [
  { name: "Fenitra RAVELOMANANTSOA",
    role: "Fondateur", 
    photo: "/assets/images/team/Fondateur.jpg" },
  { name: "Noro RANDRIANARISON",
    role: "Directrice",
    photo: "/assets/images/team/Directrice.jpg"  },
];

export default function Membres() {
  return (
    <section className={styles.membres} id="equipe">
      <div className={styles.inner}>
        <span className={styles.eyebrow}>L&apos;équipe</span>
        <h2 className={styles.title}>Les personnes derrière la Maison du Numérique</h2>

        <div className={styles.grid}>
          {TEAM.map((member) => (
            <div key={member.role} className={styles.card}>
              <div className={styles.photoWrap}>
                {member.photo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={member.photo}
                   alt={member.name}
                   className={styles.photo} />
                ) : (
                  <PlaceholderAvatar />
                )}
              </div>
              <p className={styles.name}>{member.name}</p>
              <p className={styles.role}>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlaceholderAvatar() {
  return (
    <svg viewBox="0 0 24 24" width="40" height="40" fill="none">
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