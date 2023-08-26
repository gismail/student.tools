import { sql } from "@vercel/postgres";

export default async function ( request,response) {
  try {
    const {rows} = await sql`SELECT * FROM operations`;
    return response.status(200).json(rows);
  } catch (error) {
    return response.status(500).json({ error });
  }
}