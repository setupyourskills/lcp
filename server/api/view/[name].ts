import mysql from "mysql2/promise";
import { db } from "../../utils/db";

export default defineEventHandler(async (event) => {
  const componentName = event.context.params?.name;

  if (!componentName) {
    throw createError({ statusCode: 400, message: "Component name missing" });
  }

  const sql = `
    SELECT *
    FROM  ${mysql.escapeId(componentName)}
  `;

  try {
    const [rows] = await db.execute<mysql.RowDataPacket[]>(sql);
    if (!Array.isArray(rows) || rows.length === 0) {
      throw createError({ statusCode: 404, message: "Section not found" });
    }
    return rows;
  } catch (err: any) {
    throw createError({
      statusCode: 500,
      message: "Database querry failed",
      data: { err },
    });
  }
});
