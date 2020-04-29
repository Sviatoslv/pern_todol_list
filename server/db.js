const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'pern_user',
  host: 'localhost',
  database: 'perntodo',
  password: 'qwerty',
  port: 5432,
});

module.exports = pool;
