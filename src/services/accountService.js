const accountModel = require('../../models/account');
const destinationModel = require('../../models/destination');

const AccountService = {
  async createAccount(data) {
    return await accountModel.createAccount(data);
  },

  async getAllAccounts() {
    return await accountModel.getAllAccounts();
  },

  async getAccountById(id) {
    return await accountModel.getAccountById(id);
  },

  async updateAccount(id, data) {
    const existing = await accountModel.getAccountById(id);
    if (!existing) return null;
    return await accountModel.updateAccount(id, data);
  },

  async deleteAccount(id) {
    const existing = await accountModel.getAccountById(id);
    if (!existing) return null;
    return await accountModel.deleteAccount(id);
  },

  async getDestinationsForAccount(id) {
    const account = await accountModel.getAccountById(id);
    if (!account) throw new Error('Account not found');
    return await destinationModel.getDestinationsByAccount(id);
  }
};

module.exports = AccountService;
