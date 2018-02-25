const express = require('express');
const _ = require('lodash');
const debug = require('debug')('akira-server:index');

const { AKIRA_SERVER_PORT } = require('./config/config-env');
const { MODULE_NAME, MODULE_VERSION } = require('./constants');
const { knex } = require('./config/db-pool');
const trackingItemDb = require('./persistence/tracking-item-data');

const app = express();

// http://localhost:5000
app.get('/', (req, res) => {
  res.send({
    name: MODULE_NAME,
    version: MODULE_VERSION
  });
});

// http://localhost:5000/api/v1/tracked-item/224
app.get('/api/v1/tracked-item/:id', (req, res) => {
  const dbConfig = {
    knex,
    transaction: null
  };

  const trackingItemId = _.get(req, 'params.id');
  debug(`Retrieving tracking item ID ${trackingItemId}`);

  trackingItemDb.getTrackingItem(dbConfig, trackingItemId)
    .then(result => {
      if (result) {
        // Data was retrieved.
        return res.send(result);
      }

      // No matching data.
      debug('No matching data found');
      return res.status(404);
    })
    .catch(err => {
      debug(err);
      return res.status(500);
    });
});

app.listen(AKIRA_SERVER_PORT);
debug(`Akira server node process started on port ${AKIRA_SERVER_PORT}`);
