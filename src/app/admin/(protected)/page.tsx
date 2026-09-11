import styles from "./Admin.module.css";

export default function AdminDashboard() {
  return (
    <div>
      <h1 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>
        Tableau de bord
      </h1>
      <p style={{ color: "var(--text-muted)", fontSize: 14 }}>
        Bienvenue dans l&apos;espace de gestion. Utilise le menu à gauche
        pour naviguer entre les modules.
      </p>
    </div>
  );
}