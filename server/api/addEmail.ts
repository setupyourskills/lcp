import mysql from "mysql2/promise";
import db from "../utils/db";

export default defineEventHandler(async (event) => {
  const { email } = await readBody(event);

  if (!email || typeof email !== "string") {
    throw createError({ statusCode: 400, message: "Invalid e‑mail" });
  }

  const sql = "INSERT INTO users (Email) VALUES (?)";

  try {
    const [result] = await db.execute<mysql.ResultSetHeader>(sql, [email]);

    console.log(result.insertId, email);
  } catch (err: any) {
    console.error("Insertion Error", err.message);
    throw new Error(err.message);
  }
});
