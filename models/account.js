const db = require('../config/db');

exports.createAccount = async (data) => {
  const { email, account_name, website } = data;
  const result = await db.query(
    'INSERT INTO "Accounts" (email, account_name, website, "createdAt", "updatedAt") VALUES ($1, $2, $3, NOW(), NOW()) RETURNING *',
    [email, account_name, website]
  );
  return result.rows[0];
};

exports.getAllAccounts = async () => {
  const result = await db.query('SELECT * FROM "Accounts"');
  return result.rows;
};

exports.getAccountById = async (id) => {
  const result = await db.query('SELECT * FROM "Accounts" WHERE id = $1', [id]);
  return result.rows[0];
};

exports.updateAccount = async (id, data) => {
  const { email, account_name, website } = data;
  const result = await db.query(
    'UPDATE "Accounts" SET email = $1, account_name = $2, website = $3 WHERE id = $4 RETURNING *',
    [email, account_name, website, id]
  );
  return result.rows[0];
};

exports.deleteAccount = async (id) => {
  const result = await db.query('DELETE FROM "Accounts" WHERE id = $1 RETURNING *', [id]);
  return result.rows[0];
};

exports.getDestinationsForAccount = async (id) => {
  const result = await db.query('SELECT * FROM "Destinations" WHERE account_id = $1', [id]);
  return result.rows;
};
