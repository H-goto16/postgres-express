import { Pool } from "pg";

const pool = new Pool({
  user: 'postgres',
  host: 'postgres',
  database: 'postgres_db',
  password: 'password',
  port: 5432,
})

export default pool;
