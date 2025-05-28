const accountService = require('../services/accountService');

exports.createAccount = async (req, res) => {
  try {
    const { email, account_name, website } = req.body;
    if (!email || !account_name) {
      return res.status(400).json({ error: 'Email and account_name are required' });
    }
    const account = await accountService.createAccount({ email, account_name, website });
    res.status(201).json(account);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllAccounts = async (req, res) => {
  try {
    const accounts = await accountService.getAllAccounts();
    res.json(accounts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAccountById = async (req, res) => {
  try {
    const account = await accountService.getAccountById(req.params.id);
    if (!account) return res.status(404).json({ error: 'Account not found' });
    res.json(account);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateAccount = async (req, res) => {
  try {
    const updated = await accountService.updateAccount(req.params.id, req.body);
    if (!updated) return res.status(404).json({ error: 'Account not found' });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteAccount = async (req, res) => {
  try {
    const deleted = await accountService.deleteAccount(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Account not found' });
    res.json({ message: 'Account deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getDestinationsForAccount = async (req, res) => {
  try {
    const destinations = await accountService.getDestinationsForAccount(req.params.id);
    res.json(destinations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};