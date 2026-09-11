import { Resend } from "resend";

export async function sendMagicLinkEmail(to: string, link: string) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  await resend.emails.send({
    from: "Maison du Numérique <onboarding@resend.dev>", // à adapter à ton domaine vérifié
    to,
    subject: "Votre lien de connexion — Maison du Numérique",
    html: `
      <div style="font-family: sans-serif; max-width: 480px; margin: 0 auto;">
        <h2 style="color: #14532d;">Connexion à l'espace de gestion</h2>
        <p>Clique sur le bouton ci-dessous pour te connecter. Ce lien est valable 15 minutes.</p>
        <a href="${link}" style="display:inline-block; background:#14532d; color:#fff; padding:12px 24px; border-radius:999px; text-decoration:none; font-weight:bold; margin-top:12px;">
          Se connecter
        </a>
        <p style="color:#888; font-size:12px; margin-top:24px;">
          Si tu n'as pas demandé ce lien, ignore cet email.
        </p>
      </div>
    `,
  });
}