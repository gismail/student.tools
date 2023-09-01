import type { VercelRequest, VercelResponse } from '@vercel/node';
import { sql } from '@vercel/postgres';
 
export default async function (request : VercelRequest,response : VercelResponse) {
  try {
    const { rows } = await sql`SELECT * FROM operations`;
    //const rows = [{"id":1,"name":"Calculate String Length","description":"Calculates and returns the length of a given string.","categories":["Math","Computer","Programming"]},{"id":2,"name":"Delete Spaces","description":"Removes all space characters from a given string.","categories":["Math","Computer","Programming"]},{"id":3,"name":"Calculate CRC-16","description":"Generates the CRC-16 checksum for data integrity verification.","categories":["Math","Computer","Programming"]},{"id":4,"name":"Convert Inches to Centimeters","description":"Converts a length value from inches to centimeters.","categories":["Math","Computer","Programming"]},{"id":5,"name":"Math Operation","description":"Performs a mathematical operation on given numbers.","categories":["Math","Computer","Programming"]},{"id":6,"name":"Convert Numbers","description":"Converts a number from one base to another by performing digit-by-digit conversion. This operation is particularly useful for converting numbers between commonly used bases, such as decimal to binary or hexadecimal.","categories":["Math","Computer","Programming"]}]
    return response.status(200).json(rows);
  } catch (error) {
    return response.status(500).json({ error });
  }
}