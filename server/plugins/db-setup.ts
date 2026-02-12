import mysql from "mysql2/promise";
import db from "../utils/db";
import {
  TABLE_NAMES,
  CREATE_PREFIX,
  CREATE_SUFFIX,
} from "../assets/tables_structure_templates";
import { VIEW_NAMES } from "../assets/view_templates";
import { CONTENT_BDD, INSERT_PREFIX } from "../assets/content_database";

async function isViewNotExist(viewName: string) {
  const CHECK_QUERY = `
    SELECT COUNT(*) AS cnt
    FROM information_schema.views
    WHERE TABLE_SCHEMA = DATABASE()
      AND TABLE_NAME   = ?
  `;
  const [rows] = await db.execute<mysql.RowDataPacket[]>(CHECK_QUERY, [
    viewName,
  ]);

  return Number(rows[0].cnt) === 0;
}

async function isTableNotExist(viewName: string) {
  const CHECK_QUERY = `
    SELECT COUNT(*) AS cnt
    FROM information_schema.tables
    WHERE TABLE_SCHEMA = DATABASE()
      AND TABLE_NAME   = ?
  `;
  const [rows] = await db.execute<mysql.RowDataPacket[]>(CHECK_QUERY, [
    viewName,
  ]);

  return Number(rows[0].cnt) === 0;
}

async function isTableEmpty(tableName: string) {
  const CHECK_QUERY = `SELECT 1 FROM \`${tableName}\` LIMIT 1`;

  const [rows] = await db.execute<mysql.RowDataPacket[]>(CHECK_QUERY);

  return rows.length === 0;
}

export default defineNitroPlugin(async () => {
  for (const tableName of TABLE_NAMES) {
    if (await isTableNotExist(tableName.table)) {
      await db.execute(
        `${CREATE_PREFIX} ${tableName.table} ${tableName.template} ${CREATE_SUFFIX}`,
      );
      console.log(`Table ${tableName.table} created!`);
    }
  }

  for (const viewName of VIEW_NAMES) {
    if (await isViewNotExist(viewName.view)) {
      await db.query(viewName.template);
      console.log(`View ${viewName.view} created!`);
    }
  }

  for (const tableName of CONTENT_BDD) {
    if (await isTableEmpty(tableName.table)) {
      await db.execute(
        `${INSERT_PREFIX} ${tableName.table} ${tableName.content}`,
      );
      console.log(`Content in Table ${tableName.table} inserted!`);
    }
  }
});
