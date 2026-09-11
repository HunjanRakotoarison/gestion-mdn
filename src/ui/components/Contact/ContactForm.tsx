"use client";

import { Send } from "lucide-react";
import { useState } from "react";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    try {
      await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      setStatus("success");
      form.reset();
    } catch {
      setStatus("idle");
    }
  }

  return (
    <form
      className={styles.card}
      action="https://formspree.io/f/contact@maisondunumerique.mg"
      method="POST"
      onSubmit={handleSubmit}
    >
      <h2 className={styles.title}>Envoyez un message</h2>

      {status === "success" ? (
        <div className={styles.success}>
          <span className={styles.successIcon}>✓</span>
          <p>Merci pour votre message ! Nous vous répondrons très bientôt.</p>
        </div>
      ) : (
        <>
          <div className={styles.field}>
            <label htmlFor="c-name" className={styles.label}>
              Nom
            </label>
            <input
              type="text"
              id="c-name"
              name="name"
              required
              className={styles.input}
              placeholder="Votre nom"
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="c-email" className={styles.label}>
              Email
            </label>
            <input
              type="email"
              id="c-email"
              name="email"
              required
              className={styles.input}
              placeholder="votre@email.com"
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="c-subject" className={styles.label}>
              Sujet
            </label>
            <input
              type="text"
              id="c-subject"
              name="subject"
              required
              className={styles.input}
              placeholder="Objet de votre message"
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="c-message" className={styles.label}>
              Message
            </label>
            <textarea
              id="c-message"
              name="message"
              required
              rows={5}
              className={styles.textarea}
              placeholder="Votre message..."
            />
          </div>
          <button
            type="submit"
            className={styles.submit}
            disabled={status === "loading"}
          >
            {status === "loading" ? (
              <span className={styles.spinner} />
            ) : (
              <>
                Envoyer le message
                <Send size={16} strokeWidth={2} />
              </>
            )}
          </button>
        </>
      )}
    </form>
  );
}