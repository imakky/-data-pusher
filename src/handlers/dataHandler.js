const destinationModel = require('../../models/destination');
const axios = require('axios');

exports.forwardData = async (req, res) => {
  const { account_id } = req.params;
  try {
    const destinations = await destinationModel.getDestinationsByAccount(account_id);
    const results = await Promise.all(destinations.map(dest => {
      return axios({
        method: dest.method,
        url: dest.url,
        headers: dest.headers,
        data: req.body
      }).then(response => ({ success: true, data: response.data }))
        .catch(error => ({ success: false, error: error.message }));
    }));
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};