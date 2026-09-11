import { NextRequest, NextResponse } from "next/server";
import { getDB } from "@/lib/db";
import { generateMagicToken } from "@/lib/auth";
import { sendMagicLinkEmail } from "@/lib/email";

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email) {
    return NextResponse.json({ error: "Email requis." }, { status: 400 });
  }

  const db = await getDB();

  let user = await db
    .prepare("SELECT * FROM users WHERE email = ?")
    .bind(email)
    .first<{ id: number; role: string; status: string }>();

  // Email inconnu : on vérifie s'il correspond à un bénévole enregistré
  if (!user) {
    const volunteer = await db
      .prepare("SELECT id FROM volunteers WHERE email = ?")
      .bind(email)
      .first<{ id: number }>();

    if (!volunteer) {
      return NextResponse.json({ status: "unknown" });
    }

    await db
      .prepare(
        "INSERT INTO users (email, role, status, volunteer_id) VALUES (?, 'benevole', 'pending', ?)"
      )
      .bind(email, volunteer.id)
      .run();

    return NextResponse.json({ status: "pending_new" });
  }

  if (user.status === "pending") {
    return NextResponse.json({ status: "pending" });
  }

  // Compte approuvé : on génère et envoie le lien magique
  const token = generateMagicToken();
  const expiresAt = new Date(Date.now() + 15 * 60 * 1000).toISOString();

  await db
    .prepare(
      "INSERT INTO magic_tokens (user_id, token, expires_at) VALUES (?, ?, ?)"
    )
    .bind(user.id, token, expiresAt)
    .run();

  const link = `${req.nextUrl.origin}/api/auth/verify?token=${token}`;
  await sendMagicLinkEmail(email, link);

  return NextResponse.json({ status: "sent" });
}