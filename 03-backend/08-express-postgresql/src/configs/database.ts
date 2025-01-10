import { Pool } from "pg";

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "intro_to_join",
  password: "newpass",
  port: 5432,
});

export default pool;
