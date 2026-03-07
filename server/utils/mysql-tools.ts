import mysql from "mysql2/promise";
import { db } from "../utils/db";

export async function isTableEmpty(tableName: string) {
  const CHECK_QUERY = `SELECT 1 FROM \`${tableName}\` LIMIT 1`;

  const [rows] = await db.execute<mysql.RowDataPacket[]>(CHECK_QUERY);

  return rows.length === 0;
}

export async function isTableNotExist(viewName: string) {
  const CHECK_QUERY = `
    SELECT COUNT(*) AS cnt
    FROM information_schema.tables
    WHERE TABLE_SCHEMA = DATABASE()
      AND TABLE_NAME   = ?
  `;
  const [rows] = await db.execute<mysql.RowDataPacket[]>(CHECK_QUERY, [
    viewName,
  ]);

  return Number(rows[0]?.cnt ?? 0) === 0;
}

export async function isViewNotExist(viewName: string) {
  const CHECK_QUERY = `
    SELECT COUNT(*) AS cnt
    FROM information_schema.views
    WHERE TABLE_SCHEMA = DATABASE()
      AND TABLE_NAME   = ?
  `;
  const [rows] = await db.execute<mysql.RowDataPacket[]>(CHECK_QUERY, [
    viewName,
  ]);

  return Number(rows[0]?.cnt ?? 0) === 0;
}
