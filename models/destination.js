const db = require('../config/db');

exports.createDestination = async (data) => {
  const { account_id, url, method, headers } = data;
  const result = await db.query(
    'INSERT INTO "Destinations" (account_id, url, http_method, headers, "createdAt", "updatedAt") VALUES ($1, $2, $3, $4, NOW(), NOW()) RETURNING *',
    [account_id, url, method, headers]
  );
  return result.rows[0];
};

exports.getAllDestinations = async () => {
  const result = await db.query('SELECT * FROM "Destinations"');
  return result.rows;
};

exports.getDestinationById = async (id) => {
  const result = await db.query('SELECT * FROM "Destinations" WHERE id = $1', [id]);
  return result.rows[0];
};

exports.getDestinationsByAccount = async (accountId) => {
  const result = await db.query('SELECT * FROM "Destinations" WHERE account_id = $1', [accountId]);
  return result.rows;
};

exports.updateDestination = async (id, data) => {
  const { url, method, headers } = data;
  const result = await db.query(
    'UPDATE "Destinations" SET url = $1, method = $2, headers = $3 WHERE id = $4 RETURNING *',
    [url, method, headers, id]
  );
  return result.rows[0];
};

exports.deleteDestination = async (id) => {
  const result = await db.query('DELETE FROM "Destinations" WHERE id = $1 RETURNING *', [id]);
  return result.rows[0];
};
