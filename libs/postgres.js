const { Client } = require('pg');

async function getConnection() {
  const client = new Client({
    host: '10.41.1.190',
    port: 5432,
    user: 'espe',
    password: 'espe',
    database: 'examenU3'
  });
  await client.connect();
  return client;
}

module.exports = getConnection;
