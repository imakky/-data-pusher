require('dotenv').config(); // Make sure this is at the very top
const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const accountRoutes = require('./src/routes/accountRoutes');
const destinationRoutes = require('./src/routes/destinationRoutes');
const dataHandlerRoutes = require('./src/routes/dataRoutes');
require('./models');

const PORT = process.env.PORT || 3000; // ✅ Move this above swaggerOptions

const app = express();
app.use(bodyParser.json());

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Data Pusher API',
      version: '1.0.0',
      description: 'API Documentation for Data Pusher App'
    },
    servers: [
      {
        url: `http://localhost:${PORT}`
      }
    ]
  },
  apis: ['./src/routes/*.js']
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/api/accounts', accountRoutes);
app.use('/api/destinations', destinationRoutes);
app.use('/server', dataHandlerRoutes);
app.use('/data', dataHandlerRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
