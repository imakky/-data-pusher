const axios = require('axios');
const AccountModel = require('../../models/account');

exports.DataService = {
  async forwardData(accountId, payload) {
    const destinations = await AccountModel.getDestinationsForAccount(accountId);

    const results = await Promise.all(destinations.map(async (destination) => {
      try {
        await axios({
          method: destination.method || 'post',
          url: destination.url,
          headers: JSON.parse(destination.headers || '{}'),
          data: payload,
        });
        return { destinationId: destination.id, status: 'success' };
      } catch (error) {
        return { destinationId: destination.id, status: 'error', error: error.message };
      }
    }));

    return results;
  }
};