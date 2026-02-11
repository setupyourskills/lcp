import mysql from "mysql2/promise";
import db from "../utils/db";

import { VIEW_NAMES } from "../assets/view_templates";

async function isViewExists(viewName: string) {
  const CHECK_QUERY = `
    SELECT COUNT(*) AS cnt
    FROM information_schema.views
    WHERE TABLE_SCHEMA = DATABASE()
      AND TABLE_NAME   = ?
  `;
  const [rows] = await db.execute<mysql.RowDataPacket[]>(CHECK_QUERY, [
    viewName,
  ]);

  return Array.isArray(rows) && rows[0]?.cnt === 0;
}

export default defineNitroPlugin(async () => {
  for (const viewName of VIEW_NAMES) {
    if (await isViewExists(viewName.view)) {
      await db.query(viewName.template);
      console.log(`${viewName} created!`);
    }
  }
});
