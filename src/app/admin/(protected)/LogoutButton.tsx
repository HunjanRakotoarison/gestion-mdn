"use client";

import { useRouter } from "next/navigation";
import styles from "./Admin.module.css";

export default function LogoutButton() {
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <button type="button" onClick={handleLogout} className={styles.logout}>
      Déconnexion
    </button>
  );
}