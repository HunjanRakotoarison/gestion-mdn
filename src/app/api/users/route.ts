// src/app/api/users/route.ts
import { getDb } from "@/db/clients";
import { users } from "@/db/schema";

export async function GET() {
  const db = getDb();
  const allUsers = await db.select().from(users);
  return Response.json(allUsers);
}