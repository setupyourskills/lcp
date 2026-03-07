import mysql from "mysql2/promise";

const config = useRuntimeConfig();
const CREDENTIALS = {
  host: config.dbHost,
  user: config.dbUser,
  password: config.dbPassword,
  database: config.dbName,
};

export const db: mysql.Pool = (() => {
  try {
    return mysql.createPool({
      ...CREDENTIALS,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });
  } catch (err: any) {
    throw createError({
      statusCode: 500,
      message: `Can't create the pool MySQL : ${err.message}`,
      data: { err },
    });
  }
})();

(async () => {
  try {
    const conn = await mysql.createConnection(CREDENTIALS);
    await conn.end();
  } catch (err: any) {
    throw createError({
      statusCode: 500,
      message: `Can't create the test connection to MySQL : ${err.message}`,
      data: { err },
    });
  }
})();
