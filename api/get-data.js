import { sql } from "@vercel/postgres";

export default async function getdata(req, res) {
  console.log("invoked")
  const { rows } = await sql`SELECT * FROM operations`;
  res.json(rows);
}