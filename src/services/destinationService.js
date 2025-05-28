const destinationModel = require('../../models/destination');

const DestinationService = {
  async createDestination(data) {
    return await destinationModel.createDestination(data);
  },

  async getDestinationById(id) {
    return await destinationModel.getDestinationById(id);
  },

  async updateDestination(id, data) {
    const existing = await destinationModel.getDestinationById(id);
    if (!existing) return null;
    return await destinationModel.updateDestination(id, data);
  },

  async deleteDestination(id) {
    const existing = await destinationModel.getDestinationById(id);
    if (!existing) return null;
    return await destinationModel.deleteDestination(id);
  },

  async getAllDestinations() {
    return await destinationModel.getAllDestinations();
  },

  async getDestinationsByAccount(accountId) {
    return await destinationModel.getDestinationsByAccount(accountId);
  }
};

module.exports = DestinationService;
