const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  password: 'kylie29',
  host: 'localhost',
  port: 5433,
  database: 'exercise'
});

pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack);
  }
  console.log('Connected to the database');
  client.query('SELECT NOW()', (err, result) => {
    release();
    if (err) {
      return console.error('Error executing query', err.stack);
    }
    console.log(result.rows);
  });
});

module.exports = {
  query: (text, params) => pool.query(text, params)
};