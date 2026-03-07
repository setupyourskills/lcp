import mysql from "mysql2/promise";
import { db } from "../utils/db";

export default defineEventHandler(async () => {
  const PRODUCT_QUERY = `
    SELECT id, color, name, description, price
    FROM products
  `;

 try {
    const [rows] = await db.execute<mysql.RowDataPacket[]>(PRODUCT_QUERY);

    return rows as IProduct[];
  } catch (err: any) {
    throw createError({
      statusCode: 500,
      message: "Can't find any product!",
      data: { err },
    });
  }});
