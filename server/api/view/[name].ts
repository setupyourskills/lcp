import mysql from "mysql2/promise";
import db from "../../utils/db";

export default defineEventHandler(async (event) => {
  const componentName = event.context.params?.name;

  const query = getQuery(event);
  const sectionName = query.section?.toString();
  const lang = Array.isArray(query.lang) ? query.lang[0] : (query.lang ?? "fr");

  if (!componentName) {
    throw createError({ statusCode: 400, message: "Component name missing" });
  }

  const sql = `
    SELECT *
    FROM  ${mysql.escapeId(componentName)}
    WHERE name = ? AND lang = ?
  `;

  try {
    const [rows] = await db.execute<mysql.RowDataPacket[]>(sql, [
      sectionName,
      lang,
    ]);
    if (!Array.isArray(rows) || rows.length === 0) {
      throw createError({ statusCode: 404, message: "Section not found" });
    }
    return rows;
  } catch (err: any) {
    console.error("Query error!", err.message);
    throw createError({
      statusCode: 500,
      message: err.message || "Database query failed",
    });
  }
});
