import { sql } from "@vercel/postgres";

export default async function (req, res) {
  const { rows } = await sql`SELECT * FROM operations`;
  res.json(rows);
}