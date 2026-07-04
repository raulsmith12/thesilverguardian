const dotenv = require("dotenv");
const mysql = require("mysql2/promise");

dotenv.config();

const DEFAULT_DB_PORT = 3306;

function getRequiredEnv(name) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

function getDatabasePort() {
  const rawPort = process.env.DB_PORT;

  if (!rawPort) {
    return DEFAULT_DB_PORT;
  }

  const port = Number.parseInt(rawPort, 10);

  if (!Number.isInteger(port) || port <= 0) {
    throw new Error("DB_PORT must be a positive integer");
  }

  return port;
}

const databaseConfig = {
  host: getRequiredEnv("DB_HOST"),
  database: getRequiredEnv("DB_NAME"),
  user: getRequiredEnv("DB_USER"),
  password: getRequiredEnv("DB_PASSWORD"),
  port: getDatabasePort(),
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10,
  idleTimeout: 60000,
  queueLimit: 0,
  namedPlaceholders: true,
};

let pool;

function getDatabasePool() {
  if (!pool) {
    pool = mysql.createPool(databaseConfig);
  }

  return pool;
}

async function pingDatabase() {
  const connection = await getDatabasePool().getConnection();

  try {
    await connection.ping();
  } finally {
    connection.release();
  }
}

async function closeDatabasePool() {
  if (!pool) {
    return;
  }

  await pool.end();
  pool = undefined;
}

module.exports = {
  closeDatabasePool,
  databaseConfig,
  getDatabasePool,
  pingDatabase,
};
