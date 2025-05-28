const destinationService = require('../services/destinationService');

exports.createDestination = async (req, res) => {
  try {
    const { account_id, url, method, headers } = req.body;
    if (!account_id || !url || !method || !headers) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    const destination = await destinationService.createDestination({ account_id, url, method, headers });
    res.status(201).json(destination);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllDestinations = async (req, res) => {
  try {
    const destinations = await destinationService.getAllDestinations();
    res.json(destinations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getDestinationsByAccount = async (req, res) => {
  try {
    const destinations = await destinationService.getDestinationsByAccount(req.params.accountId);
    res.json(destinations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateDestination = async (req, res) => {
  try {
    const updated = await destinationService.updateDestination(req.params.id, req.body);
    if (!updated) return res.status(404).json({ error: 'Destination not found' });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteDestination = async (req, res) => {
  try {
    const deleted = await destinationService.deleteDestination(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Destination not found' });
    res.json({ message: 'Destination deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
