import { NextRequest, NextResponse } from "next/server";
import { getDB } from "@/lib/db";
import { createSessionToken } from "@/lib/auth";

export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get("token");

  if (!token) {
    return NextResponse.redirect(
      new URL("/admin/login?error=invalid", req.url)
    );
  }

  const db = await getDB();

  const record = await db
    .prepare(
      "SELECT magic_tokens.*, users.email, users.role FROM magic_tokens JOIN users ON users.id = magic_tokens.user_id WHERE token = ?"
    )
    .bind(token)
    .first<{
      user_id: number;
      expires_at: string;
      used_at: string | null;
      email: string;
      role: "super_admin" | "admin" | "benevole";
    }>();

  if (
    !record ||
    record.used_at ||
    new Date(record.expires_at).getTime() < Date.now()
  ) {
    return NextResponse.redirect(
      new URL("/admin/login?error=expired", req.url)
    );
  }

  await db
    .prepare(
      "UPDATE magic_tokens SET used_at = datetime('now') WHERE token = ?"
    )
    .bind(token)
    .run();

  const sessionToken = await createSessionToken({
    userId: record.user_id,
    email: record.email,
    role: record.role,
  });

  const response = NextResponse.redirect(new URL("/admin", req.url));
  response.cookies.set("session", sessionToken, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  return response;
}