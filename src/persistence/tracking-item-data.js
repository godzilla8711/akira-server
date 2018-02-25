/*
 * Performs database interactions related to storing tracking item data.
 * @module persistence/tracking-item-data
 */

const _ = require('lodash');

const { DB_TABLE_TRACKING_ITEM } = require('../constants');

const trackingItemDb = {
  getTrackingItem(dbConfig, trackingItemId) {
    return dbConfig.knex
      .transacting(dbConfig.transaction)
      .select('*')
      .from(DB_TABLE_TRACKING_ITEM)
      .where('tracked_item_id', trackingItemId)
      .then(result => _.head(result));
  }
};

module.exports = trackingItemDb;
