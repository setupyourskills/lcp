import mysql from "mysql2/promise";

const config = useRuntimeConfig();

export default mysql.createPool({
  host: config.dbHost,
  user: config.dbUser,
  password: config.dbPassword,
  database: config.dbName,
});
