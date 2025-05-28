const { Pool } = require('pg');

const config = {
  user: 'postgres',
  password: 'Software',
  host: 'localhost',
  port: 5432,
  database: 'datapusher',
};

const pool = new Pool(config);

module.exports = pool;