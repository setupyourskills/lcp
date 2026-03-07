import mysql from "mysql2/promise";
import { db } from "../utils/db";

export default defineEventHandler(async (event) => {
  const { email } = await readBody(event);

  const { isInvalidRegex, isTooLong } = checkEmail(email.value);

  if (!email || typeof email !== "string" || isInvalidRegex || isTooLong) {
    throw createError({ statusCode: 400, message: "Invalid e‑mail!" });
  }

  const EMAIL_QUERY = "INSERT INTO users (Email) VALUES (?)";

  try {
    const [result] = await db.execute<mysql.ResultSetHeader>(EMAIL_QUERY, [email]);

    console.log(result.insertId, email);
  } catch (err: any) {
    throw createError({
      statusCode: 500,
      message: "Database insertion failed!",
      data: { err },
    });
  }
});
