const { DataService } = require('../services/dataService');

exports.forwardDataToDestinations = async (req, res) => {
  const accountId = req.params.accountId;
  const payload = req.body;

  try {
    const result = await DataService.forwardData(accountId, payload);
    res.json({ success: true, forwardedTo: result });
  } catch (err) {
    console.error('Forwarding error:', err.message);
    res.status(500).json({ success: false, error: err.message });
  }
};