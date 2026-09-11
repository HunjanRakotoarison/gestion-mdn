import Link from "next/link";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";
import LogoutButton from "./LogoutButton";
import styles from "./Admin.module.css";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  // La page /admin/login gère elle-même son propre affichage sans layout,
  // donc si pas de session ici, on redirige (le middleware le fait déjà,
  // ceci est une sécurité supplémentaire côté serveur).
  if (!session) {
    redirect("/admin/login");
  }

  return (
    <div className={styles.shell}>
      <aside className={styles.sidebar}>
        <p className={styles.brand}>Maison du Numérique</p>
        <p className={styles.brandSub}>Espace de gestion</p>

        <nav className={styles.nav}>
          <Link href="/admin" className={styles.navLink}>
            Tableau de bord
          </Link>
          <Link href="/admin/benevoles" className={styles.navLink}>
            Bénévoles
          </Link>
          <Link href="/admin/temoignages" className={styles.navLink}>
            Témoignages
          </Link>
          <Link href="/admin/partenaires" className={styles.navLink}>
            Partenaires
          </Link>
          <Link href="/admin/activites" className={styles.navLink}>
            Activités
          </Link>
          {session.role === "super_admin" && (
            <Link href="/admin/utilisateurs" className={styles.navLink}>
              Utilisateurs
            </Link>
          )}
        </nav>

        <div className={styles.userBox}>
          <p className={styles.userEmail}>{session.email}</p>
          <p className={styles.userRole}>{session.role}</p>
          <LogoutButton />
        </div>
      </aside>

      <main className={styles.content}>{children}</main>
    </div>
  );
}