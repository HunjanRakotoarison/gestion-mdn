"use client";

import { useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import styles from "./Login.module.css";

type Status =
  | "idle"
  | "loading"
  | "sent"
  | "pending"
  | "pending_new"
  | "unknown"
  | "error";

export default function LoginPage() {
  const searchParams = useSearchParams();
  const urlError = searchParams.get("error");

  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/auth/request-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      setStatus(data.status ?? "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.glow} />

      <div className={styles.card}>
        <div className={styles.logoWrap}>
          <Image
            src="/assets/images/logo.jpg"
            alt="Maison du Numérique"
            width={64}
            height={64}
            className={styles.logo}
          />
        </div>

        <h1 className={styles.title}>Espace de gestion</h1>
        <p className={styles.subtitle}>Maison du Numérique</p>

        {urlError === "expired" && (
          <p className={styles.error}>
            Ce lien a expiré ou a déjà été utilisé. Redemande une connexion
            ci-dessous.
          </p>
        )}
        {urlError === "invalid" && (
          <p className={styles.error}>Lien de connexion invalide.</p>
        )}

        {status === "sent" && (
          <p className={styles.success}>
            Un lien de connexion a été envoyé à <strong>{email}</strong>.
            Vérifie ta boîte mail (et tes spams).
          </p>
        )}

        {status === "pending" && (
          <p className={styles.info}>
            Ta demande d&apos;accès est en attente de validation par un
            administrateur.
          </p>
        )}

        {status === "pending_new" && (
          <p className={styles.info}>
            Ton email a été reconnu comme bénévole. Une demande d&apos;accès
            a été créée et est en attente de validation par un
            administrateur.
          </p>
        )}

        {status === "unknown" && (
          <p className={styles.error}>
            Cet email n&apos;est associé à aucun compte ni fiche bénévole.
            Contacte un administrateur.
          </p>
        )}

        {status === "error" && (
          <p className={styles.error}>Une erreur est survenue. Réessaie.</p>
        )}

        {(status === "idle" || status === "error") && (
          <form onSubmit={handleSubmit} className={styles.form}>
            <label className={styles.label}>
              Adresse email
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="toi@exemple.com"
                required
                className={styles.input}
              />
            </label>

            <button type="submit" className={styles.submit}>
              Recevoir un lien de connexion
            </button>
          </form>
        )}

        {status === "loading" && (
          <p className={styles.loading}>Envoi en cours...</p>
        )}

        {(status === "sent" ||
          status === "pending" ||
          status === "pending_new") && (
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className={styles.retry}
          >
            ← Utiliser un autre email
          </button>
        )}
      </div>
    </div>
  );
}